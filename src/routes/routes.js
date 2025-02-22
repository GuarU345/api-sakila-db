import { Router } from "express";
import { actorRoutes } from "./actor.routes.js";

export const router = new Router()

router.use(actorRoutes)