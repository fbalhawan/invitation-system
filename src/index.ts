import express from 'express';
import cors from 'cors';
require('dotenv').config({ path: __dirname+'/../.env' });
const app = express();
const PORT = process.env.PORT;
import apiRoute from "./routes/index";

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req: any, res: any) => res.send('API is alive! 🤖'));

app.use(apiRoute);

app.listen(PORT, () => {

  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);

});
