import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service.js';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) {} //Dependency injection of the CustomerService class into the CustomerController class using the constructor and 'private' keyword.

    @Get()
    getAllCustomers() {
        console.log("Reached controller")
        return this.customerService.getAllCustomers();
    }

    @Post()
    createCustomer(@Body() body: any) {
        return this.customerService.createCustomer(body);
    }
}
