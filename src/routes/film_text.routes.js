import { Router } from "express";
import { FilmTextController } from "../controllers/film_text.controller.js";

const router = Router()
const filmTextController = new FilmTextController()

router.get('/film_texts/:id',filmTextController.readOne.bind(filmTextController))
router.post('/film_texts', filmTextController.create.bind(filmTextController))

export const filmTextRoutes = router
