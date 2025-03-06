export class CrudController {
    constructor(service) {
        this.service = service;
    }

    async create(req, res) {
        const data = req.body;

        try {
            const result = await this.service.create(data);
            res.json(result);
        } catch (error) {
            res.json({ error: error.message });
        }
    }

    async read(_req, res) {
        try {
            const result = await this.service.read();
            res.json(result);
        } catch (error) {
            res.json({ error: error.message });
        }
    }

    async readOne(req, res) {
        const { id } = req.params;
        try {
            const result = await this.service.readOne(id);
            res.json(result);
        } catch (error) {
            res.json({ error: error.message });
        }

    }

    async update(req, res) {
        const { id } = req.params;
        const data = req.body;

        try {
            const result = await this.service.update(id, data);
            res.json(result);
        } catch (error) {
            res.json({ error: error.message });
        }

    }

    async delete(req, res) {
        const { id } = req.params;

        try {
            const result = await this.service.delete(id);
            res.json(result);
        } catch (error) {
            res.json({ error: error.message });
        }
    }
}