import { CrudController } from "../utils/controller.js";
import { InventoryService } from "../services/inventory.service.js";

export class InventoryController extends CrudController {
    constructor() {
        super(new InventoryService());
    }
}