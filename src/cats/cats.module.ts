import { Module } from '@nestjs/common';
import { CatsService } from './cats.service.js';
import { CatsController } from './cats.controller.js';
import { CustomerModule } from '../customer/customer.module.js';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
