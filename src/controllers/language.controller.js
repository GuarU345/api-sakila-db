import { CrudController } from "../utils/controller";
import { LanguageService } from "../services/language.service";

export class LanguageController extends CrudController {
    constructor() {
        super(new LanguageService())
    }
}