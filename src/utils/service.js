export class CrudService {
    constructor(model,primaryKey) {
        this.model = model
        this.primaryKey = primaryKey
    }

    async create(data) {
        return await this.model.create({ data })
    }

    async read() {
        return await this.model.findMany()
    }

    async readOne(id) {
        return await this.model.findUnique({ where: { [this.primaryKey]: id } })
    }

    async update(id, data) {
        return await this.model.update({ where: { [this.primaryKey]: id }, data })
    }

    async delete(id) {
        return await this.model.delete({ where: { [this.primaryKey]: id } })
    }
}
