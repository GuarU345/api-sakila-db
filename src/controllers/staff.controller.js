import { CrudController } from "../utils/controller";
import { StaffService } from "../services/staff.service";

export class StaffController extends CrudController {
    constructor() {
        super(new StaffService())
    }
}
