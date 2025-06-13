import NodeCache from 'node-cache';
import { v4 as uuidv4 } from 'uuid';
import { Session } from '../types/favQsTypes';
import { config } from '../config';

const sessionCache = new NodeCache({ stdTTL: config.CACHE_TTL_SECONDS });

export const getOrCreateSession = (token: string | undefined): { session: Session; sessionId: string } => {
  const sessionId = token || uuidv4();
  const session: Session = sessionCache.get(sessionId) || { quotes: [], page: 1, returned: 0 };
  return { session, sessionId };
};

export const updateSession = (sessionId: string, session: Session, done: boolean): void => {
  if (done) {
    sessionCache.del(sessionId);
  } else {
    sessionCache.set(sessionId, session);
  }
};
