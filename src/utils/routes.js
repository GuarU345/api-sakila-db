import { Router } from "express";

export class Routes {
    constructor(routeName, controller) {
        this.routeName = routeName
        this.controller = controller
        this.router = Router()
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get(`/${this.routeName}`, this.controller.read.bind(this.controller))
        this.router.get(`/${this.routeName}/:id`, this.controller.readOne.bind(this.controller))
        this.router.post(`/${this.routeName}`, this.controller.create.bind(this.controller))
        this.router.put(`/${this.routeName}/:id`, this.controller.update.bind(this.controller))
        this.router.delete(`/${this.routeName}/:id`, this.controller.delete.bind(this.controller))
    }

    addCustomRoute({ method, path, action }) {
        if (typeof this.controller[action] !== 'function') {
            throw new Error(`Action "${action}" is not a function in the controller`);
        }

        this.router[method](`/${this.routeName}/${path}`, this.controller[action].bind(this.controller))
    }

    getRouter() {
        return this.router
    }
}