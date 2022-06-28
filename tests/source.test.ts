import BlaguesAPI from '../src/index';
import '../src/types';

const blagues = new BlaguesAPI(process.env.token);

describe('source api tests', () => {
  test('token exists', () => {
    return expect(process.env.token).toBeDefined();
  });

  test('count joke', async () => {
    const joke = await blagues.count();
    return expect(joke);
  });

  test('random joke', async () => {
    const randomJoke = {
      id: expect.any(Number),
      type: expect.stringMatching(/global|dev|dark|limit|beauf|blondes/),
      joke: expect.any(String),
      answer: expect.any(String)
    };

    expect.assertions(1);

    const joke = await blagues.random();
    return expect(joke).toMatchObject(randomJoke);
  });

  test('random joke categorized', async () => {
    expect.assertions(1);

    const joke = await blagues.randomCategorized(blagues.categories.DEV);
    return expect(joke.type).toBe(blagues.categories.DEV);
  });

  test('random joke with disallowed type', async () => {
    expect.assertions(2);

    const [joke1, joke2] = await Promise.all([
      blagues.random({
        disallow: [blagues.categories.DARK]
      }),
      blagues.random({
        disallow: blagues.categories.DARK
      })
    ]);
    expect(joke1.type).not.toBe(blagues.categories.DARK);
    expect(joke2.type).not.toBe(blagues.categories.DARK);
  });

  test('get joke by ID', async () => {
    expect.assertions(1);

    const joke = await blagues.fromId(815);
    return expect(joke.id).toBe(815);
  });
});
