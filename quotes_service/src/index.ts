import express from 'express';
import { config } from './config';
import quotesRouter from './api/routes/quotes';


const app = express();
const port = config.PORT

app.use('/quotes', quotesRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
