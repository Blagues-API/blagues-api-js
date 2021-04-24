const fetch = require('node-fetch');

const apiConstants = require('../constants/api');

class Transport {
    
    constructor(authToken) {
        this.authToken = authToken;
    }

    get(endpoint, params) {
        let url;
        if (params == null) url = apiConstants.HOST + endpoint; else url = apiConstants.HOST + endpoint + this._convertParams(params);
        return fetch(url, {
            headers: this._getHeaders()
        });
    }

    _getHeaders() {
        return {
            Authorization: `Bearer ${this.authToken}`
        };
    }

    _convertParams(object) {
        let filters = "?";
        let keyName = Object.keys(object)[0];
        let values = eval(`object.${keyName}`);
        values.forEach(element => {
            filters = filters.concat(keyName, '=', element, '&');
        });
        return filters;
    }
}

module.exports = Transport;