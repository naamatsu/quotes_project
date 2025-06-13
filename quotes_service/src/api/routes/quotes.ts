import express from 'express';
import { getQuotes } from '../controllers/quotes';

const router = express.Router();

// Ensure getQuotes is a function with (req, res, next?) signature
router.get('/:count', (req, res) => {
  getQuotes(req, res);
});

export default router;
