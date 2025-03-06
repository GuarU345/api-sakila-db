export class CrudService {
    constructor(model) {
        this.model = model
        this.primaryKey = this.getPrimaryKey()
    }

    getPrimaryKey() {
        const modelFields = this.model.dmmf.modelMap[this.model]?.fields
        const primaryField = modelFields?.find(field => field.isId)
        return primaryField?.name || 'id'
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