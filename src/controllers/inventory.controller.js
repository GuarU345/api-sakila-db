import { CrudController } from "../utils/controller";
import { InventoryService } from "../services/inventory.service";

export class InventoryController extends CrudController {
    constructor() {
        super(new InventoryService());
    }
}