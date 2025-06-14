import express from 'express';
import cors from "cors";
import { config } from './config';
import quotesRouter from './api/routes/quotes';


const app = express();
app.use(cors());
const port = config.PORT

app.use('/quotes', quotesRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
