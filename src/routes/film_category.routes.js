import { Router } from "express";
import { FilmCategoryController } from "../controllers/film_category.controller.js";

const router = Router()
const filmCategoryController = new FilmCategoryController()

router.get('/film_categories', filmCategoryController.read.bind(filmCategoryController))
router.get('/film_categories/:id', filmCategoryController.readOne.bind(filmCategoryController))
router.post('/film_categories', filmCategoryController.create.bind(filmCategoryController))
router.put('/film_categories/:id', filmCategoryController.update.bind(filmCategoryController))
router.delete('/film_categories/:id', filmCategoryController.delete.bind(filmCategoryController))

export const filmCategoryRoutes = router