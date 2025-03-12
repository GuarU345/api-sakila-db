import { CrudController } from "../utils/controller.js";
import { PaymentService } from "../services/payment.service.js";

export class PaymentController extends CrudController {
    constructor() {
        super(new PaymentService())
    }
}
