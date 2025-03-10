import { prisma } from '../libs/prisma.js'
import { CrudService } from '../utils/service.js'

export class AddressService extends CrudService {
    constructor() {
        super(prisma.address,prisma.address.fields.address_id.name)
    }
}