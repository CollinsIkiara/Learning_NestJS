import { Logger, Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { createObserveModule } from '@nestjs/observe';
import { CustomerModule } from './customer/customer.module.js';
import { CatsModule } from './cats/cats.module.js';
import { ProductModule } from './product/product.module.js';
import { GlobalModule } from './global/global.module.js';
import { LoggingMiddleware } from './middlewares/middleware3.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [CustomerModule, CatsModule, ProductModule, GlobalModule],
  controllers: [],
  providers: [Logger],
  exports: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}