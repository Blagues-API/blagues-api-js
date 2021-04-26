# BlaguesAPI

Voici un petit packet NPM tout mignon pour utiliser
[BlaguesAPI](https://www.blagues-api.fr)

## Pour commencer

Pour commencer, il faut construire l'objet avec votre token

```js
const BlaguesAPI = require('blaguesapi');
const blaguesAPI = new BlaguesAPI('VOTRE_TOKEN_ICI');
```

## Réponse de l'API

Si tout est bien mis en place, l'API vous renvéra une réponse comme celle ci :

```json
{
  "id": 1,
  "type": "dev",
  "joke": "Un développeur ne descend pas du métro.",
  "answer": "Il libère la RAM..."
}
```

([Plus d'informations ici](https://www.blagues-api.fr/))

## Blagues

### random

Méthode pour obtenir une blague aléatoire

```js
await blaguesAPI.Jokes.random();
```

A cette méthode, vous pouvez spécifier des filtres pour présicer la recherche,
vous pouvez voir la liste des différentes catégories [ici](#catégories)

```js
await blaguesAPI.Jokes.random({
  disallow: [BlaguesAPI.categories.DARK, BlaguesAPI.categories.LIMIT]
});
```

### randomCategorized

Méthode pour obtenir une blague aléatoire provenant d'une catégorie spécifique,
vous pouvez voir la liste des différentes catégories [ici](#catégories)

```js
await blaguesAPI.Jokes.randomCategorized(blaguesAPI.Category.DEV);
```

### fromId

Obtenir une blague avec un identifiant, pratique si vous voulez obtenir une
blague précise.

```js
await blaguesAPI.Jokes.fromId(id);
```

## Catégories

Certaines méthodes requiert en paramètre une catégorie.

```js
BlaguesAPI.categories.GLOBAL; // Return GLOBAL category
BlaguesAPI.categories.DEV; // Return DEV category
BlaguesAPI.categories.DARK; // Return DARK category
BlaguesAPI.categories.LIMIT; // Return LIMIT category
BlaguesAPI.categories.BEAUF; // Return BEAUF category
BlaguesAPI.categories.BLONDES; // Return BLONDES category
```
