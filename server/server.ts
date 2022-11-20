'use strict';

import express from 'express';
import cors from 'cors';
import { logUrlRouter } from './routers';

export const createServer = () => {
  const app = express();

  app.use(cors());
  app.use('/', express.text(), logUrlRouter);

  return app;
};
