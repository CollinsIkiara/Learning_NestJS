import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { createObserveModule } from '@nestjs/observe';
import { CustomerModule } from './customer/customer.module.js';
import { CatsModule } from './cats/cats.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [CustomerModule, CatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}