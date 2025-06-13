import axios from "axios";
import { config } from "../config";
import { FavQsError, FavQsResponse, GetQuotesResponse, Quote, Session } from "../types/favQsTypes";
import { getOrCreateSession, updateSession } from "./sessionManager";

export const getQuotesByCount = async (count: number, continuationToken?: string): Promise<GetQuotesResponse> => {
  const { session, sessionId } = getOrCreateSession(continuationToken);

  let lastPage = false;

  while (
    session.returned + session.quotes.length < count &&
    !lastPage
  ) {
    const { quotes, lastPage: isLast } = await fetchPage(session.page++);
    session.quotes.push(...quotes);
    lastPage = isLast;
  }

  const remaining = count - session.returned;
  const batchSize = Math.min(config.FAVQS_PAGE_SIZE, remaining, session.quotes.length);
  const batch = session.quotes.splice(0, batchSize);
  session.returned += batch.length;

  const done = session.returned >= count || (lastPage && session.quotes.length === 0);


  updateSession(sessionId, session, done);

  return {
    quotes: batch,
    continuationToken: done ? null : sessionId,
    done
  };
};

const headers = { Authorization: `Token token="${config.API_KEY}"` };

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const fetchPage = async (page: number): Promise<{ quotes: Quote[]; lastPage: boolean }> => {
  for (let attempt = 0; attempt <= config.MAX_RETRIES; attempt++) {
    try {
      const res = await axios.get<FavQsResponse>(config.FAVQS_URL, { headers, params: { page } });
      return {
        quotes: res.data.quotes,
        lastPage: res.data.last_page
      };
    } catch (err) {
      const e = err as FavQsError;
      const status = e.response?.status || 0;
      if ((status === 429 || status >= 500) && attempt < config.MAX_RETRIES) {
        await delay(500 * 2 ** attempt);
      } else {
        throw e;
      }
    }
  }
  throw new Error(`Failed to fetch page after ${config.MAX_RETRIES} retries`);
};
