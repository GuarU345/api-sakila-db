import { Router } from "express";
import { PaymentController } from "../controllers/payment.controller.js";

const router = Router()

const paymentController = new PaymentController()

router.get('/payments', paymentController.read.bind(paymentController))
router.get('/payments/:id', paymentController.readOne.bind(paymentController))
router.post('/payments', paymentController.create.bind(paymentController))
router.put('/payments/:id', paymentController.update.bind(paymentController))
router.delete('/payments/:id', paymentController.delete.bind(paymentController))

export const paymentRoutes = router

