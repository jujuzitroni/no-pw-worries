import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import {
  deleteCredential,
  readCredential,
  readCredentials,
  writeCredential,
} from './utils/credentials';
import { connectDatabase } from './utils/database';

if (process.env.MONGO_URL === undefined) {
  throw new Error('Missing env MONGO_URL');
}

const app = express();
const port = 5000;

// Allow CORS for every following route
// Express Middleware (Alternative to CORS module)
app.use((_request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.json());

app.get('/api/credentials', async (_request, response) => {
  const credentials = await readCredentials();
  response.json(credentials);
});

app.get('/api/credentials/:service', async (request, response) => {
  const credential = await readCredential(request.params.service);
  response.json(credential);
});

app.post('/api/credentials', async (request, response) => {
  await writeCredential('fuck', request.body);
  response.send('credential saved in db');
});

app.delete('/api/credentials/:service', async (request, response) => {
  await deleteCredential(request.params.service);
  response.send('Delete credential');
});

connectDatabase(process.env.MONGO_URL).then(() => {
  console.log('Database connected');
  app.listen(port, () => {
    console.log(`nopwworries listening at http://localhost:${port}`);
  });
});
