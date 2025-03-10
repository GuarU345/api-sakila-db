import { CrudController } from '../utils/controller.js'
import { AddressService } from '../services/address.service.js'

export class AddressController extends CrudController {
    constructor() {
        super(new AddressService())
    }
}