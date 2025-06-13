import express from 'express';
import { getQuotes } from '../controllers/quotes';
const router = express.Router();

import { Request, Response } from 'express';

router.get('/:count', async (req: Request, res: Response) => {
  try {
    res.send(await getQuotes(req, res));
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
