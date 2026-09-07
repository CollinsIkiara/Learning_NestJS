import { Module } from '@nestjs/common';
import { CatsService } from './cats.service.js';
import { CatsController } from './cats.controller.js';
import { CustomerModule } from '../customer/customer.module.js';

@Module({
  imports: [CustomerModule], // Importing the whole CustomerModule module so that the CatsModule can use the CustomerService class.
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
