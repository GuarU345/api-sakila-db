import { CrudController } from "../utils/controller.js";
import { RentalService } from "../services/rental.service.js";

export class RentalController extends CrudController {
    constructor() {
        super(new RentalService())
    }
}