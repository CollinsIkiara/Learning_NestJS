import { NestFactory } from '@nestjs/core';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject } from '@vercel/analytics';
import { AppModule, ObserveInstrument } from './app.module.js';
import { HttpExceptionFilter } from './exception-filters/http-exception.filter.js';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  
  // Initialize Vercel Speed Insights
  injectSpeedInsights();
  
  // Initialize Vercel Web Analytics
  inject();
  
  const loggerInstance = app.get(Logger)
  app.useGlobalFilters(new HttpExceptionFilter(loggerInstance));
  // app.useGlobalPipes(
  //   new ValidationPipe({ 
  //     // disableErrorMessages: true, 
  //     whitelist: true, 
  //     forbidNonWhitelisted: true 
  //   }),
  // );  
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
