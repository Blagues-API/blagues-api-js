import 'cross-fetch/polyfill';
import { HOST } from './constants';
import type { RandomJokeOptionsResolvable } from './types';

export default class Transport {
  private authToken: string

  constructor(authToken: string) {
    this.authToken = authToken;
  }

  public get(endpoint: string, options?: RandomJokeOptionsResolvable): Promise<Response> {
    let url = HOST + endpoint;
    if (options) url += this._convertOptions(options);
    return fetch(url, {
      headers: this._getHeaders(),
    });
  }

  private _getHeaders() {
    return {
      Authorization: `Bearer ${this.authToken}`,
    };
  }

  private _convertOptions(options: RandomJokeOptionsResolvable) {
    if(typeof options !== 'object') {
      throw new Error('"options" has to be a Object');
    }

    if(typeof options.disallow !== 'string' && !Array.isArray(options.disallow)) {
      throw new Error('"disallow" has to be a Array or a String');
    }
    const disallow = typeof options.disallow === 'string' ? [options.disallow] : options.disallow;

    return '?' + disallow.map((type) => 'disallow=' + type).join('&');
  }
}
