import { Router } from "express";
import { actorController } from "../controllers/actor.controller.js";

const router = Router()

router.get('/actors',actorController.getActors)

export const actorRoutes = router