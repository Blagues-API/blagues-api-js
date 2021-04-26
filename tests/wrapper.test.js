const BlaguesAPI = require('../lib/index');
const api = new BlaguesAPI(process.env.token);

describe('wrapper api tests', () => {
  test('token exists', () => {
    return expect(process.env.token).toBeDefined();
  });

  test('random joke', async () => {
    const randomJoke = {
      id: expect.any(Number),
      type: expect.stringMatching(/global|dev|dark|limit|beauf|blondes/),
      joke: expect.any(String),
      answer: expect.any(String),
    };

    expect.assertions(1);

    const joke = await api.Jokes.random();
    return expect(joke).toMatchObject(randomJoke);
  });

  test('random joke categorized', async () => {
    expect.assertions(1);

    const joke = await api.Jokes.rancomCategorized(api.Category.DEV);
    return expect(joke.type).toBe(api.Category.DEV);
  });

  test('random joke with disallowed type', async () => {
    expect.assertions(1);

    const joke = await api.Jokes.random({
      disallow: [api.Category.DARK],
    });
    return expect(joke.type).not.toBe(api.Category.DARK);
  });

  test('get joke by ID', async () => {
    expect.assertions(1);

    const joke = await api.Jokes.fromId(815);
    return expect(joke.id).toBe(815);
  });
});
