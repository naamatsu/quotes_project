import { Request, Response } from 'express';
import { GetQuotesResponse } from '../../types/favQsTypes';
import { getQuotesByCount } from '../../services/favQsService';

export const getQuotes = async (req: Request, res: Response): Promise<Response> => {
    const count = parseInt(req.params.count, 10);
    if (isNaN(count) || count <= 0) {
      return res.status(400).json({ error: 'Invalid count parameter' });
    }
    const continuationToken = req.query.continuationToken as string | undefined;
    try {
        const response: GetQuotesResponse = await getQuotesByCount(count, continuationToken);
        return res.json(response);
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error: Failed to fetch quotes' });
    }
};
