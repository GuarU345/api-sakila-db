import { CrudController } from '../utils/controller.js'
import { FilmRatingService } from '../services/film_rating.service.js'

export class FilmRatingController extends CrudController {
    constructor() {
        super(new FilmRatingService())
    }
}
