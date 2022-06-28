import { Endpoints } from './constants';
import Transport from './transport';
import {
  Categories,
  Category,
  CountJoke,
  IDResolvable,
  JokeResponse,
  RandomJokeOptionsResolvable
} from './types';

export default class BlaguesAPI {
  private transport: Transport;
  public categories: typeof Categories;

  public constructor(authToken: string | undefined) {
    if (!authToken) {
      throw new Error('No token provided');
    }
    this.transport = new Transport(authToken);
    this.categories = Categories;
  }

  public async random(
    options?: RandomJokeOptionsResolvable
  ): Promise<JokeResponse> {
    const response = await this.transport.get(Endpoints.RANDOM, options);
    return response.json();
  }

  public async randomCategorized(category: Category): Promise<JokeResponse> {
    const response = await this.transport.get(
      Endpoints.RANDOM_CATEGORIZED.replace(':type:', category)
    );
    return response.json();
  }

  async fromId(id: IDResolvable): Promise<JokeResponse> {
    const response = await this.transport.get(
      Endpoints.FROM_ID.replace(':id:', `${id}`)
    );
    return response.json();
  }

  public async count(): Promise<CountJoke> {
    const response = await this.transport.get(Endpoints.COUNT);
    return response.json();
  }
}
