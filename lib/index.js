const Transport = require('./transport');
const Jokes = require('./jokes/index');

const endpoints = require('../constants/endpoints');
const categories = require('../constants/categories');

class BlaguesAPI {
  constructor(authToken) {
    this.transport = new Transport(authToken);
    this.Jokes = new Jokes(this.transport);
    this.Categories = categories;
    this.endpoints = endpoints;
  }

  static get categories() {
    return categories;
  }
}

module.exports = BlaguesAPI;
