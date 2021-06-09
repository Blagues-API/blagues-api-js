const endpoints = require('../../constants/endpoints');

class Jokes {
  constructor(transport) {
    this.transport = transport;
  }

  async random(filters) {
    const response = await this.transport.get(endpoints.RANDOM, filters);
    return response.json();
  }

  async randomCategorized(cotegory) {
    const response = await this.transport.get(
      endpoints.RANDOMCATEGORIZED.replace(':type:', cotegory)
    );
    return response.json();
  }

  async fromId(id) {
    const response = await this.transport.get(
      endpoints.FROMID.replace(':id:', id)
    );
    return response.json();
  }
}

module.exports = Jokes;
