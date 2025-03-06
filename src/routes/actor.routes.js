import { Router } from "express";
import { ActorController } from "../controllers/actor.controller.js";

const router = Router()
const actorController = new ActorController()

router.get('/actors', actorController.read.bind(actorController))
router.get('/actors/:id', actorController.readOne.bind(actorController))
router.post('/actors', actorController.create.bind(actorController))
router.put('/actors/:id', actorController.update.bind(actorController))
router.delete('/actors/:id', actorController.delete.bind(actorController))

export const actorRoutes = router