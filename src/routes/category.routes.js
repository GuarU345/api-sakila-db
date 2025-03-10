import { Router } from "express";
import { CategoryController } from "../controllers/category.controller.js";

const router = Router()
const categoryController = new CategoryController()

router.get('/categories', categoryController.read.bind(categoryController))
router.get('/categories/:id', categoryController.readOne.bind(categoryController))
router.post('/categories', categoryController.create.bind(categoryController))
router.put('/categories/:id', categoryController.update.bind(categoryController))
router.delete('/categories/:id', categoryController.delete.bind(categoryController))

export const categoryRoutes = router