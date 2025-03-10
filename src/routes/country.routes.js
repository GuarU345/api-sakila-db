import { Router } from "express";
import { CountryController } from "../controllers/country.controller.js";

const router = Router()
const countryController = new CountryController()

router.get('/countries', countryController.read.bind(countryController))
router.get('/countries/:id', countryController.readOne.bind(countryController))
router.post('/countries', countryController.create.bind(countryController))
router.put('/countries/:id', countryController.update.bind(countryController))
router.delete('/countries/:id', countryController.delete.bind(countryController))

export const countryRoutes = router