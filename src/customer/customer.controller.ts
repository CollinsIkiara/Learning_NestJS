import { Body, Controller, Get, Post, HttpException, HttpStatus, ForbiddenException, BadRequestException, UseFilters, UsePipes, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { CustomerService } from './customer.service.js';
import { HttpExceptionFilter } from '../exception-filters/http-exception.filter.js';
import errors from '../config/errors.config.js';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe.js';
import { CustomerDto } from './dtos/customer.dto.js';


@UsePipes(new ValidationPipe())
@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) {} //Dependency injection of the CustomerService class into the CustomerController class using the constructor and 'private' keyword.

    @Get()
    getAllCustomers(@Query('limit', ParseIntPipe) limit: any) {
        console.log('The type of limit is ', typeof limit);
        console.log(limit);
        return this.customerService.getAllCustomers();
    }

    // @UsePipes(CustomPipe)
    @Post()
    createCustomer(@Body() body: CustomerDto) {
        console.log('In the route handler logic with body', body);
        return this.customerService.createCustomer(body);
    }
}
