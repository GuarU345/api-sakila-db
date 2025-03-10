import { Router } from "express";
import { actorRoutes } from "./actor.routes.js";
import { filmCategoryRoutes } from "./film_category.routes.js";
import {filmTextRoutes} from "./film_text.routes.js"

export const router = new Router()

router.use(actorRoutes)
router.use(filmCategoryRoutes)
router.use(filmTextRoutes)
