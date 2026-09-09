import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { createObserveModule } from '@nestjs/observe';
import { CustomerModule } from './customer/customer.module.js';
import { CatsModule } from './cats/cats.module.js';
import { ProductModule } from './product/product.module.js';
import { GlobalModule } from './global/global.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [CustomerModule, CatsModule, ProductModule, GlobalModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}