import { prisma } from '../libs/prisma.js'
import { CrudService } from '../utils/service.js'

export class FilmRatingService extends CrudService {
    constructor() {
        super(prisma.film_rating,prisma.film_rating.fields.film_id.name)
    }
}
