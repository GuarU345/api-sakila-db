import { prisma } from '../libs/prisma.js'
import { CrudService } from '../utils/service.js'

export class StaffService extends CrudService {
    constructor() {
        super(prisma.staff,prisma.staff.fields.staff_id.name)
    }
}
