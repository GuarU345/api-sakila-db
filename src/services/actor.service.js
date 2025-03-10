import { prisma } from '../libs/prisma.js'
import { CrudService } from '../utils/service.js'

export class ActorService extends CrudService {
    constructor() {
        super(prisma.actor,prisma.actor.fields.actor_id.name)
    }
}
