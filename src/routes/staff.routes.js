import { Router } from "express";
import { StaffController } from "../controllers/staff.controller.js";

const router = Router()

const staffController = new StaffController()

router.get('/staff', staffController.read.bind(staffController))
router.get('/staff/:id', staffController.readOne.bind(staffController))
router.post('/staff', staffController.create.bind(staffController))
router.put('/staff/:id', staffController.update.bind(staffController))
router.delete('/staff/:id', staffController.delete.bind(staffController))

export const staffRoutes = router

