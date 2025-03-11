import { prisma } from '../libs/prisma.js';
import { CrudService } from "../utils/service.js";

export class FilmTextService extends CrudService {
    constructor() {
        super(prisma.film_text,prisma.film_text.fields.film_id.name)
    }
}