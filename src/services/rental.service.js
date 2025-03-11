import { prisma } from '../libs/prisma.js'
import { CrudService } from '../utils/service.js'

export class RentalService extends CrudService {
    constructor() {
        super(prisma.rental,prisma.rental.fields.rental_id.name)
    }
}
