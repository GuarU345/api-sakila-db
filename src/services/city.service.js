import { prisma } from '../libs/prisma.js'
import { CrudService } from '../utils/service.js'

export class CityService extends CrudService {
    constructor() {
        super(prisma.city,prisma.city.fields.city_id.name)
    }
}