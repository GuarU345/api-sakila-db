import { CrudController } from "../utils/controller.js";
import { FilmCategoryService } from "../services/film_category.service.js";

export class FilmCategoryController extends CrudController {
    constructor() {
        super(new FilmCategoryService())
    }

    async getFilmsByCategoryId(req,res){
        const {categoryId} = req.params

        try {
            const films = await this.service.getFilmsByCategoryId(Number(categoryId))
            res.json(films)    
        } catch (error) {
            res.json({error:error.message})
        }   
    }
}