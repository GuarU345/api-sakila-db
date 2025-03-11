import { prisma } from '../libs/prisma.js'
import { CrudService } from '../utils/service.js'

export class StoreService extends CrudService {
    constructor() {
        super(prisma.store,prisma.store.fields.store_id.name)
    }
}
