import { prisma } from '../libs/prisma.js'
import { CrudService } from '../utils/service.js'

export class CategoryService extends CrudService {
    constructor() {
        super(prisma.category,prisma.category.fields.category_id.name)
    }
}