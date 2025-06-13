import { Request, Response } from 'express';
import { Quote } from '../../types/favQsTypes';

export const getQuotes = async (req: Request, res: Response): Promise<Response> => {
    const count = parseInt(req.params.count, 10);
    if (isNaN(count) || count <= 0) {
      return res.status(400).json({ error: 'Invalid count parameter' });
    }

    try {
        const quotes: Quote[] = [] //todo get from service
        return res.json(quotes);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch quotes' });
    }
};
