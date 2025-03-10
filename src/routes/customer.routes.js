import { Router } from "express";
import { CustomerController } from "../controllers/customer.controller.js";

const router = Router()
const customerController = new CustomerController()

router.get('/customers', customerController.read.bind(customerController))
router.get('/customers/:id', customerController.readOne.bind(customerController))
router.post('/customers', customerController.create.bind(customerController))
router.put('/customers/:id', customerController.update.bind(customerController))
router.delete('/customers/:id', customerController.delete.bind(customerController))

export const customerRoutes = router