import { NestFactory } from '@nestjs/core';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject } from '@vercel/analytics';
import { AppModule, ObserveInstrument } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  
  // Initialize Vercel Speed Insights
  injectSpeedInsights();
  
  // Initialize Vercel Web Analytics
  inject();
  
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
