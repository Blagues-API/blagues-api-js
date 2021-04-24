const Transport = require('./transport');
const Jokes = require('./jokes/index');

const Category = require('../constants/category');
const Endpoint = require('../constants/endpoint');

class BlaguesAPI {

    constructor(authToken) {
        this.transport = new Transport(authToken);
        this.Jokes = new Jokes(this.transport);
        this.Category = Category;
        this.Endpoint = Endpoint;
    }

}

module.exports = BlaguesAPI;