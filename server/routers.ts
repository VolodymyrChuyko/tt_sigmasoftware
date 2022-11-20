import { Router } from 'express';
import operateLogData from './controllers';

export const logUrlRouter = Router();

logUrlRouter.post('/', operateLogData);
