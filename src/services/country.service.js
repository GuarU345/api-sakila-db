import { prisma } from '../libs/prisma.js'
import { CrudService } from '../utils/service.js'

export class CountryService extends CrudService {
    constructor() {
        super(prisma.country,prisma.country.fields.country_id.name)
    }
}