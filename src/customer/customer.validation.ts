import * as Zod from 'zod';

const validation = {
    createCustomer: {
        body: Zod.object({
            name: Zod.string(),
            age: Zod.number(),
        }),
    },
};

export default validation;