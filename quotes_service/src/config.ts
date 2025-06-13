import dotenv from 'dotenv';

dotenv.config();

export const config  = {
    PORT: process.env.PORT || 3000,
    API_KEY: process.env.FAVQS_API_KEY,
    FAVQS_URL: 'https://favqs.com/api/quotes',
    FAVQS_PAGE_SIZE: 25,
    MAX_RETRIES: 3,
    CACHE_TTL_SECONDS: 600
}
