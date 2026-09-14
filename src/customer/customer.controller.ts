import { Body, Controller, Get, Post, HttpException, HttpStatus, ForbiddenException, BadRequestException, UseFilters } from '@nestjs/common';
import { CustomerService } from './customer.service.js';
import { HttpExceptionFilter } from '../exception-filters/http-exception.filter.js';
import errors from '../config/errors.config.js';


@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) {} //Dependency injection of the CustomerService class into the CustomerController class using the constructor and 'private' keyword.

    @Get()
    getAllCustomers() {
        throw new BadRequestException(errors.validationFailed);
        return this.customerService.getAllCustomers();
    }

    @Post()
    createCustomer(@Body() body: any) {
        return this.customerService.createCustomer(body);
    }
}
