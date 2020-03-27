const connection = require('../database/connection');

module.exports = {
    async login(request, response){
        const { id } = request.body;

        const ong = await connection('ongs')
            .select('name')
            .where('id', id)
            .first();

        if (!ong){
            return response.status(400).json({ error: 'Nenhuma ONG encontrada com esse ID.'});
        }

        return response.json(ong);
    }
};