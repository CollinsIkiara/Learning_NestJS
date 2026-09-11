import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  console.log('Making a request to', req.method, ' ', req.originalUrl);
  next();
};