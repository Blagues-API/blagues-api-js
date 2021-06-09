# BlaguesAPI

Ce paquet Npm fourni une interface pour intéragir avec
[Blagues-API](https://www.blagues-api.fr)

## Installation

Vous pouvez simplement installer la dépendance à votre projet depuis Yarn ou Npm
:

```shell
$ yarn add blagues-api # npm install blagues-api
```

## Mise en place

### Importation

```js
// ES6
import BlaguesAPI from 'blagues-api';

// CommonJS
const BlaguesAPI = require('blagues-api');

// Browser
<script src="https://unpkg.com/blagues-api@2.1.0/dist/blagues-api.umd.js"></script>;
```

### Initialisation

Pour utiliser l'API, vous avez besoin d'un **token d'authentification** que vous
pouvez obtenir en vous connectant sur [Blagues-API](https://www.blagues-api.fr/)
avec votre compte Discord:

```js
const blagues = new BlaguesAPI('VOTRE_TOKEN_ICI');
```

## Utilisation

### Blague aléatoire

```js
await blagues.random();
```

A cette méthode, vous pouvez spécifier certains types que vous ne souhaitez pas
recevoir.

```js
await blagues.random({
  disallow: [blagues.categories.DARK, blagues.categories.LIMIT]
});
```

### Blague aléatoire d'une catégorie

```js
await blagues.randomCategorized(blagues.categories.DEV);
```

### Blague à partir de son ID

Les blagues sont identifiées par un ID que vous recevez en même tant que chaque
blague.

Spécifiez cet identifiant en paramètre et vous l'obtiendez à nouveau.

```js
await blagues.fromId(50);
```

## Catégories

Certaines méthodes requiert en paramètre une catégorie.

```js
blagues.categories.GLOBAL; // Blague tout publique
blagues.categories.DEV; // Blague de développeur
blagues.categories.DARK; // Blague d'humour noir
blagues.categories.LIMIT; // Blague 18+
blagues.categories.BEAUF; // Blague beauf
blagues.categories.BLONDES; // Blague de blondes
```
