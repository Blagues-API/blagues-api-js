import BlaguesAPI from '../src/index';

const blagues = new BlaguesAPI(process.env.token);

describe('typescript tests', () => {
  test('token exists', () => {
    return expect(process.env.token).toBeDefined();
  });

  test('tests random', async () => {
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

  test('test count', async () => {
    const countJoke = {
      count: expect.any(Number)
    };

    expect.assertions(1);

    const count = await blagues.count();
    return expect(count).toMatchObject(countJoke);
  });
});
