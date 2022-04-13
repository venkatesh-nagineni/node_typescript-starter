import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { HttpClient } from 'typed-rest-client/HttpClient';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.writeHead(302, 'https://git.com');
});

app.get('/test', (req: Request, res: Response) => {
  new HttpClient('').get('http://localhost:3000').then((data) => {
    res.send(data.message.headers)
  })
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});