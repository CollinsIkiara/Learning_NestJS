import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller.js';
import { CustomerService } from './customer.service.js';

@Module({
  imports: [],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService], // Exporting the CustomerService class so that it can be used in other modules, such as the CatsModule.
})
export class CustomerModule {}