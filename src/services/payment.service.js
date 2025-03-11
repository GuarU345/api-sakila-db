import { prisma } from '../libs/prisma.js'
import { CrudService } from '../utils/service.js'

export class PaymentService extends CrudService {
    constructor() {
        super(prisma.payment,prisma.payment.fields.payment_id.name)
    }
}
