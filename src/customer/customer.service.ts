import { Injectable } from "@nestjs/common";

@Injectable()
export class CustomerService {
    customers: any[] = [];

    getAllCustomers() {
        return this.customers;
    }

    createCustomer(customer: any) {
        this.customers.push(customer);
    }
}