import { Router } from "express";
import { actorRoutes } from "./actor.routes.js";
import { addressRoutes } from "./address.routes.js";
import { categoryRoutes } from "./category.routes.js";
import { cityRoutes } from "./city.routes.js";
import { countryRoutes } from "./country.routes.js";
import { customerRoutes } from "./customer.routes.js";
import { filmRoutes } from './film.routes.js';

export const router = new Router()

router.use(actorRoutes)
router.use(addressRoutes)
router.use(categoryRoutes)
router.use(cityRoutes)
router.use(countryRoutes)
router.use(customerRoutes)
router.use(filmRoutes)