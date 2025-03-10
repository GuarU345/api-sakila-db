import { Router } from "express";
import { FilmController } from "../controllers/film.controller.js";

const router = Router()
const filmController = new FilmController()

router.get('/films', filmController.read.bind(filmController))
router.get('/films/:id', filmController.readOne.bind(filmController))
router.post('/films', filmController.create.bind(filmController))
router.put('/films/:id', filmController.update.bind(filmController))
router.delete('/films/:id', filmController.delete.bind(filmController))

export const filmRoutes = router