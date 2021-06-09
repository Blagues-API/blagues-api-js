export enum Categories {
  GLOBAL = 'global',
  DEV = 'dev',
  DARK = 'dark',
  LIMIT = 'limit',
  BEAUF = 'beauf',
  BLONDES = 'blondes',
}

export type Category =
  | 'global'
  | 'dev'
  | 'dark'
  | 'limit'
  | 'beauf'
  | 'blondes'

export type StatusCode =
  | 200
  | 400
  | 401
  | 404
  | 500

export enum Endpoints {
  FROM_ID = '/api/id/:id:',
  RANDOM = '/api/random',
  RANDOM_CATEGORIZED = '/api/type/:type:/random',
}

export type DisallowResolvable = Category | Category[];
export type IDResolvable = number | string;

export type RandomJokeOptionsResolvable = RandomJokeOptions;

export interface RandomJokeOptions {
  disallow: DisallowResolvable;
}

export interface JokeResponse {
  id: number;
  type: string;
  joke: string;
  answer: string;
}

export interface ErrorResponse {
  status: StatusCode,
  error: string,
  message: string,
}
