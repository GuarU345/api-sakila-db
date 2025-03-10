import { CrudController } from "../utils/controller";
import { FilmCategoryService } from "../services/film_category.service";

export class FilmCategoryController extends CrudController {
    constructor() {
        super(new FilmCategoryService())
    }
}