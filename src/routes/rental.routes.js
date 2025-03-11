import { Router } from "express";
import { RentalController } from "../controllers/rental.controller.js";

const router = Router()
const rentalController = new RentalController()

router.get('/rentals', rentalController.read.bind(rentalController))
router.get('/rentals/:id', rentalController.readOne.bind(rentalController))
router.post('/rentals', rentalController.create.bind(rentalController))
router.put('/rentals/:id', rentalController.update.bind(rentalController))
router.delete('/rentals/:id', rentalController.delete.bind(rentalController))

export const rentalRoutes = router
