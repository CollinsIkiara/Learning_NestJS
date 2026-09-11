import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  constructor(private logger: Logger) {}
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl: url } = req;
    const reqTime = new Date().getTime();
    res.on('finish', () => {  // Listen for the 'finish' event on the response object to log the request details after the response is sent
      const { statusCode } = res;
      const resTime = new Date().getTime();
      if (statusCode === 201 || statusCode === 200) {
        this.logger.log(
          `${method} ${url} ${statusCode} - ${resTime - reqTime}ms`,
        );
      }
    });
    next();
  }
}