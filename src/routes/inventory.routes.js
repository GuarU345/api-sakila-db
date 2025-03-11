import { Router } from "express";
import { InventoryController } from "../controllers/inventory.controller.js";

const router = Router()
const inventoryController = new InventoryController()

router.get('/inventory', inventoryController.read.bind(inventoryController))
router.get('/inventory/:id', inventoryController.readOne.bind(inventoryController))
router.post('/inventory', inventoryController.create.bind(inventoryController))
router.put('/inventory/:id', inventoryController.update.bind(inventoryController))
router.delete('/inventory/:id', inventoryController.delete.bind(inventoryController))

export const inventoryRoutes = router

    