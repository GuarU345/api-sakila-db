import { Router } from "express";
import { FilmRatingController } from "../controllers/film_rating.controller.js";

const router = Router()
const filmRatingController = new FilmRatingController()

router.get('/film_ratings', filmRatingController.read.bind(filmRatingController))
router.get('/film_ratings/:id', filmRatingController.readOne.bind(filmRatingController))
router.post('/film_ratings', filmRatingController.create.bind(filmRatingController))
router.put('/film_ratings/:id', filmRatingController.update.bind(filmRatingController))
router.delete('/film_ratings/:id', filmRatingController.delete.bind(filmRatingController))

export const filmRatingRoutes = router
