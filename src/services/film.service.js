import { prisma } from '../libs/prisma.js'
import { CrudService } from '../utils/service.js'

export class FilmService extends CrudService {
    constructor() {
        super(prisma.film,prisma.film.fields.film_id.name)
    }
}