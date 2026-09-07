import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service.js';
import { CustomerService } from '../customer/customer.service.js';

@Controller('cats')
export class CatsController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getCustomers() {
    return this.customerService.getAllCustomers();
  }
}
