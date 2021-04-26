const Transport = require('./transport');
const Endpoint = require('../constants/endpoint');
const Jokes = require('./jokes/index');

const categories = require('../constants/categories');

class BlaguesAPI {
  constructor(authToken) {
    this.transport = new Transport(authToken);
    this.Jokes = new Jokes(this.transport);
    this.Categories = categories;
    this.Endpoint = Endpoint;
  }

  static get categories() {
    return categories;
  }
}

module.exports = BlaguesAPI;
