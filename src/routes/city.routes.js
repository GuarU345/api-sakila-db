import { Router } from "express";
import { CityController } from "../controllers/city.controller.js";

const router = Router()
const cityController = new CityController()

router.get('/cities', cityController.read.bind(cityController))
router.get('/cities/:id', cityController.readOne.bind(cityController))
router.post('/cities', cityController.create.bind(cityController))
router.put('/cities/:id', cityController.update.bind(cityController))
router.delete('/cities/:id', cityController.delete.bind(cityController))

export const cityRoutes = router