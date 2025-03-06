import { CrudController } from '../utils/controller.js'
import { ActorService } from '../services/actor.service.js'

export class ActorController extends CrudController {
    constructor() {
        super(new ActorService())
    }
}