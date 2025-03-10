import { prisma } from '../libs/prisma.js'
import { CrudService } from '../utils/service.js'

export class CustomerService extends CrudService {
    constructor() {
        super(prisma.customer,prisma.customer.fields.customer_id.name)
    }
}