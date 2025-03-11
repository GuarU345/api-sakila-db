import { prisma } from '../libs/prisma.js'
import { CrudService } from '../utils/service.js'

export class LanguageService extends CrudService {
    constructor() {
        super(prisma.language,prisma.language.fields.language_id.name)
    }
}