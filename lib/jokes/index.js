const endpoint = require('../../constants/endpoint');

class Jokes {

    constructor(transport) {
        this.transport = transport;
    }

    async random(filters) {
        const response = await this.transport.get(endpoint.RANDOM, filters);
        return response.json();
    }

    async rancomCategorized(cotegory) {
        const response = await this.transport.get((endpoint.RANDOMCATEGORIZED).replace(':type:', cotegory));
        return response.json();
    }

    async fromId(id) {
        const response = await this.transport.get((endpoint.FROMID).replace(':id:', id));
        return response.json();
    }

}

module.exports = Jokes;