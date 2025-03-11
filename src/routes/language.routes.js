import { Router } from "express";
import { LanguageController } from "../controllers/language.controller.js";

const router = Router()
const languageController = new LanguageController()

router.get('/languages', languageController.read.bind(languageController))
router.get('/languages/:id', languageController.readOne.bind(languageController))
router.post('/languages', languageController.create.bind(languageController))
router.put('/languages/:id', languageController.update.bind(languageController))
router.delete('/languages/:id', languageController.delete.bind(languageController))

export const languageRoutes = router

