import { CrudController } from "../utils/controller.js";
import { FilmTextService } from "../services/film_text.service.js";

export class FilmTextController extends CrudController {
    constructor() {
        super(new FilmTextService())
    }
}

