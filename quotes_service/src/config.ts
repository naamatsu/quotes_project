import dotenv from 'dotenv';

dotenv.config();

export const config  = {
    PORT: process.env.PORT || 3000,
    API_KEY: process.env.FAVQS_API_KEY,
    FAVQS_URL: 'https://favqs.com/api/quotes'

}
