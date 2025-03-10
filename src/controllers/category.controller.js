import { CrudController } from '../utils/controller.js'
import { CategoryService } from '../services/category.service.js'

export class CategoryController extends CrudController {
    constructor() {
        super(new CategoryService())
    }
}