'use strict';

import express from 'express';
import cors from 'cors';

export const createServer = () => {
  const app = express();

  app.use(cors());

  app.get('/', (req, res) => {
    const { url } = req.query;

    console.log(url);

    res.send({ data: 'Server: interception received successfully' });
  });

  return app;
};
