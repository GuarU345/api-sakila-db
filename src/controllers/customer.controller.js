import { CrudController } from '../utils/controller.js'
import { CustomerService } from '../services/customer.service.js'

export class CustomerController extends CrudController {
    constructor() {
        super(new CustomerService())
    }
}