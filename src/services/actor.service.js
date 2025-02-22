import {prisma} from '../../lib/prisma.js'

const getActors = async() => {
    try {
        return await prisma.actor.findMany()
    } catch (error) {
        throw new Error('Error al tratar de consultar los actores')
    }
}

export const actorService = {
    getActors
}