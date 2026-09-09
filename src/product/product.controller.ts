import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { CustomerService } from '../customer/customer.service.js';

@Controller('product')
export class ProductController {
  constructor(private readonly customerService: CustomerService) {}
  @Get()
  getCustomersFromTheProductController() {
    this.customerService.getAllCustomers();
  }
}
