import { CrudController } from "../utils/controller";
import { RentalService } from "../services/rental.service";

export class RentalController extends CrudController {
    constructor() {
        super(new RentalService())
    }
}