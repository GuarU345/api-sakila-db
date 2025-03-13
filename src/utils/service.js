export class CrudService {
    constructor(model, primaryKey) {
        this.model = model
        this.primaryKey = primaryKey
    }

    async create(data) {
        try {
            return await this.model.create({ data })
        } catch (error) {
            console.log(error.message)
        }
    }

    async read() {
        try {
            return await this.model.findMany()
        } catch (error) {
            console.log(error.message)
        }
    }

    async readOne(id) {
        try {
            return await this.model.findUnique({ where: { [this.primaryKey]: id } })
        } catch (error) {
            console.log(error.message)
        }
    }

    async update(id, data) {
        try {
            return await this.model.update({ where: { [this.primaryKey]: id }, data })
        } catch (error) {
            console.log(error.message)
        }
    }

    async delete(id) {
        try {
            return await this.model.delete({ where: { [this.primaryKey]: id } })
        } catch (error) {
            console.log(error.message)
        }
    }
}
