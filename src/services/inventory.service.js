import { prisma } from '../libs/prisma.js'
import { CrudService } from '../utils/service.js'

export class InventoryService extends CrudService {
    constructor() {
        super(prisma.inventory,prisma.inventory.fields.inventory_id.name)
    }
}
