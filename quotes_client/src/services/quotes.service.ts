import axios from "axios";
import type { Quote } from "../types";

const QUOTES_SERVER_URL = 'http://localhost:3001/quotes';

interface GetQuotesRequest {
    count: number;
    continuationToken?: string;
}

interface GetQuotesResponse {
   quotes: Quote[];
   continuationToken?: string;
   totalCount: number;
}

export const getQuotes = async ({ count, continuationToken} : GetQuotesRequest) => {
     try {
        const query = continuationToken ? `?continuationToken=${continuationToken}` : ''
        const res = await axios.get<GetQuotesResponse>(QUOTES_SERVER_URL + `/${count}` + query);
        return res.data;
    } catch (err) {
        console.error(err);
        return { quotes: [], done: true };
    }
}