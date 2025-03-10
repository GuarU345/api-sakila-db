import { CrudController } from "../utils/controller";
import { FilmTextService } from "../services/film_text.service";

export class FilmTextController extends CrudController {
    constructor() {
        super(new FilmTextService())
    }
}

