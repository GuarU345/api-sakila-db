import { CrudController } from "../utils/controller";
import { PaymentService } from "../services/payment.service";

export class PaymentController extends CrudController {
    constructor() {
        super(new PaymentService())
    }
}
