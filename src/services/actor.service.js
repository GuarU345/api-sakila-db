import {prisma} from '../../lib/prisma.js'

const getActors = async() => {
    try {
        return await prisma.actor.findMany()
    } catch (error) {
        throw new Error('Error al tratar de consultar los actores')
    }
}

const getActorById = async(id) => {
    try {
        const actor = await prisma.actor.findUnique({
            where:{
                actor_id:id
            }
        })
        
        if(!actor){
            throw new Error('No se pudo encontrar al actor')
        }

        return actor
    } catch (error) {
        throw new Error('Error al tratar de buscar el actor')
    }
}

const createActor = async(data) => {
    try {
        const newActor = await prisma.actor.create({data})
        return newActor
    } catch (error) {
        throw new Error('Error al tratar de crear un nuevo actor')
    }
}

const updateActor = async(id,data) => {
    try {
        const findActor = await getActorById(id)

        const updatedActor = await prisma.actor.update({
            data,
            where:{
                actor_id:findActor.actor_id
            }
        })

        return updatedActor
    } catch (error) {
        throw new Error('Error al tratar de actualizar el actor')
    }
}

const deleteActor = async(id) => {
    try {
        const findActor = await getActorById(id)

        await prisma.actor.delete({
            where:{
                actor_id:findActor.actor_id
            }
        })
        return {delete:true}
    } catch (error) {
        throw new Error('Error al tratar de eliminar el actor')
    }
}

export const actorService = {
    getActors,
    getActorById,
    createActor,
    updateActor,
    deleteActor
}