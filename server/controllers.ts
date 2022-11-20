'use strict';

import { Request, Response } from 'express';
import logData from './services';

export default function operateLogData(req: Request, res: Response) {
  const { body } = req;

  logData(body);
  res.send(body);
}
