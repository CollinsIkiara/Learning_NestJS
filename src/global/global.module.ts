import { Global, Module } from '@nestjs/common';
import { CustomerService } from '../customer/customer.service.js';

@Global()
@Module({
    providers: [CustomerService],
    exports: [CustomerService],
})
export class GlobalModule {}
