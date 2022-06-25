export const HOST = 'https://www.blagues-api.fr';

export enum Endpoints {
  COUNT = '/api/count',
  FROM_ID = '/api/id/:id:',
  RANDOM = '/api/random',
  RANDOM_CATEGORIZED = '/api/type/:type:/random'
}
