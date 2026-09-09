import { Module } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { ProductController } from './product.controller.js';
import { CustomerModule } from '../customer/customer.module.js';
import { CatsModule } from '../cats/cats.module.js';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
