import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller.js';
import { CustomerService } from './customer.service.js';

@Module({
  imports: [],
  controllers: [CustomerController],
  providers: [],
})
export class CustomerModule {}