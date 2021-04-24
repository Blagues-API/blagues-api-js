# BlaguesAPI
  Here is a simple npm package to use [BlaguesAPI](https://www.blagues-api.fr)

## Getting Started
  You must start by constructing the object with your token

  ```js
const BlaguesAPI = require('blaguesapi');
const blaguesAPI = new BlaguesAPI('YOUR_TOKEN');
  ```

## Response

  For any request with this API, you should get a response like this (if everything is set up correctly)

  ```json
  {
      "id": 1,
      "type": "dev",
      "joke": "Un développeur ne descend pas du métro.",
      "answer": "Il libère la RAM..."
  }
  ```

## Jokes

### random
  Method to get a random joke
  ```js
  await blaguesAPI.Jokes.random();
  ```
  With this method, you can specify filters to make a more precise search, see [Category](#category) to see every categories
  ```js
  await blaguesAPI.Jokes.random({
    disallow: [
      blaguesAPI.Category.DARK,
      blaguesAPI.Category.LIMIT
    ]
  })
  ```

### randomCategorized
  Method to get a random joke from a specific category, see [Category](#category) to see every categories
  ```js
  await blaguesAPI.Jokes.randomCategorized(blaguesAPI.Category.DEV);
  ```

### fromId
  Method to get a specific joke with its id
  ```js
  await blaguesAPI.Jokes.fromId(id);
  ```

## Category
  For some methods, you can specify categories. You can retrieve them like this :

  ```js
  blaguesAPI.Category.GLOBAL; //Return GLOBAL category
  blaguesAPI.Category.DEV; //Return DEV category
  blaguesAPI.Category.DARK; //Return DARK category
  blaguesAPI.Category.LIMIT; //Return LIMIT category
  blaguesAPI.Category.BEAUF; //Return BEAUF category
  blaguesAPI.Category.BLONDES; //Return BLONDES category
  ```