import { actorService } from "../services/actor.service.js"

const getActors = async(_req,res) => {
    try {
        const actors = await actorService.getActors()
        res.json(actors)
    } catch (error) {
        res.json(error)
    }
}

export const actorController = {
    getActors
}