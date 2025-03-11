import { CrudController } from '../utils/controller.js'
import { StoreService } from '../services/store.service.js'

export class StoreController extends CrudController {
    constructor() {
        super(new StoreService())
    }
}
