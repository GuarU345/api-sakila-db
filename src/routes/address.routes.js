import { Router } from "express";
import { ActorController } from "../controllers/address.controller.js";

const router = Router()
const addressController = new ActorController()

router.get('/address', addressController.read.bind(addressController))
router.get('/address/:id', addressController.readOne.bind(addressController))
router.post('/address', addressController.create.bind(addressController))
router.put('/address/:id', addressController.update.bind(addressController))
router.delete('/address/:id', addressController.delete.bind(addressController))

export const addressRoutes = router