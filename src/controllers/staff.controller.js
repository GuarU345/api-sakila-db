import { CrudController } from "../utils/controller.js";
import { StaffService } from "../services/staff.service.js";

export class StaffController extends CrudController {
    constructor() {
        super(new StaffService())
    }

    async signin(req, res) {
        try {
            const staff = await this.service.signin(req.body)
            return res.json(staff)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
    
    async verifyCode(req, res) {
        try {
            const { email, code } = req.body
            const staff = await this.service.verifyCode(email, code)
            return res.json(staff)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
}
