const Transport = require('./transport');
const Endpoint = require('../constants/endpoint');
const Jokes = require('./jokes/index');

const Category = require('../constants/category');

class BlaguesAPI {
  constructor(authToken) {
    this.transport = new Transport(authToken);
    this.Jokes = new Jokes(this.transport);
    this.Category = Category;
    this.Endpoint = Endpoint;
  }
}

module.exports = BlaguesAPI;
