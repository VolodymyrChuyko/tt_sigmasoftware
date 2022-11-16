'use strict';

import express from 'express';
// import cors from 'cors';

export const createServer = () => {
  const app = express();

  // app.use(cors());

  app.get('/', (req, res) => {
    const { url } = req.query;

    // eslint-disable-next-line no-console
    console.log(url);

    res.send('ok');
  });

  return app;
};
