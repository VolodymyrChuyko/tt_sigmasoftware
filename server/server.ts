'use strict';

import express from 'express';
import cors from 'cors';

export const createServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.post('/', (req, res) => {
    const { url } = req.body;

    console.log(url);
    console.log('');
    res.send({ data: 'Server received interception successfully' });
  });

  return app;
};
