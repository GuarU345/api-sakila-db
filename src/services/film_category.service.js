import { prisma } from '../libs/prisma.js'
import { CrudService } from '../utils/service.js'

export class FilmCategoryService extends CrudService {
    constructor() {
        super(prisma.film_category,prisma.film_category.fields.film_id.name)
    }

    async getFilmsByCategoryId(categoryId){
        const filmsCategory = await prisma.film_category.findMany({
            where:{
                category_id:categoryId
            }
        })
        
        const filmsData = await Promise.all(filmsCategory.map(async filmCategory => {
            return await prisma.film.findUnique({
                where:{
                    film_id:filmCategory.film_id
                }
            })
        }))

        return filmsData
    }
}