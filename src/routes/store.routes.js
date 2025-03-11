import { Router } from "express";
import { StoreController } from "../controllers/store.controller.js";

const router = Router()
const storeController = new StoreController()

router.get('/stores', storeController.read.bind(storeController))
router.get('/stores/:id', storeController.readOne.bind(storeController))
router.post('/stores', storeController.create.bind(storeController))
router.put('/stores/:id', storeController.update.bind(storeController))
router.delete('/stores/:id', storeController.delete.bind(storeController))

export const storeRoutes = router