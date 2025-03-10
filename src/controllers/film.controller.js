import { CrudController } from '../utils/controller.js'
import { FilmService } from '../services/film.service.js'

export class FilmController extends CrudController {
    constructor() {
        super(new FilmService())
    }
}