import { CrudController } from '../utils/controller.js'
import { CountryService } from '../services/country.service.js'

export class CountryController extends CrudController {
    constructor() {
        super(new CountryService())
    }
}