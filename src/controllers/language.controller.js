import { CrudController } from "../utils/controller.js";
import { LanguageService } from "../services/language.service.js";

export class LanguageController extends CrudController {
    constructor() {
        super(new LanguageService())
    }
}