import { Router } from "express";
import { FilmCategoryController } from "../controllers/film_category.controller.js";

const router = Router()
const filmCategoryController = new FilmCategoryController()

router.get('/film_categories/categories/:categoryId',filmCategoryController.getFilmsByCategoryId.bind(filmCategoryController))
router.post('/film_categories', filmCategoryController.create.bind(filmCategoryController))

export const filmCategoryRoutes = router