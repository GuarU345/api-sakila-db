import { CrudController } from '../utils/controller.js'
import { CityService } from '../services/city.service.js'

export class CityController extends CrudController {
    constructor() {
        super(new CityService())
    }
}