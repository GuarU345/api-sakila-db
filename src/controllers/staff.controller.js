import { CrudController } from "../utils/controller.js";
import { StaffService } from "../services/staff.service.js";

export class StaffController extends CrudController {
    constructor() {
        super(new StaffService())
    }
}
