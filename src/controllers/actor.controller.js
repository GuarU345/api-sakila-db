import { actorService } from "../services/actor.service.js"

const getActors = async(_req,res) => {
    try {
        const actors = await actorService.getActors()
        res.json(actors)
    } catch (error) {
        res.json(error)
    }
}

const getActorById = async(req,res) => {
    const {id} = req.params

    try {
        const actor = await actorService.getActorById(Number(id))
        res.json(actor)
    } catch (error) {
        res.json(error)
    }
}

const createActor = async(req,res) => {
    const data = req.body

    try {
        const newActor = await actorService.createActor(data)
        res.json(newActor) 
    } catch (error) {
        res.json(error)
    }
}

const updateActor = async(req,res) => {
    const {id} = req.params
    const data = req.body

    try {
        const updatedActor = await actorService.updateActor(Number(id),data)
        res.json(updatedActor)
    } catch (error) {
        res.json(error)
    }
}

const deleteActor = async(req,res) => {
    const {id} = req.params

    try {
        const deleted = await actorService.deleteActor(Number(id))
        res.json(deleted)
    } catch (error) {
        res.json(error)
    }
}

export const actorController = {
    getActors,
    getActorById,
    createActor,
    updateActor,
    deleteActor
}