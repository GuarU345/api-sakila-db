import { prisma } from '../libs/prisma.js'
import { CrudService } from '../utils/service.js'

export class FilmCategoryService extends CrudService {
    constructor() {
        super(prisma.film_category,prisma.film_category.fields.film_id.name)
    }
}