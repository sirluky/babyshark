### BabyShark verse generator

```bash
npm install babyshark
```

```js
const { babySharksong, xxSharkDoo } = require('babyshark')

xxSharkDoo('Mommy') /* Outputs: Mommy shark, doo doo doo doo doo doo 
Mommy shark, doo doo doo doo doo doo 
Mommy shark, doo doo doo doo doo doo 
Mommy shark!
*/

xxSharkDoo("Let's go hunt",true) /* Outputs without word *shark*:
Let's go hunt, doo doo doo doo doo doo 
Let's go hunt, doo doo doo doo doo doo 
Let's go hunt, doo doo doo doo doo doo 
Let's go hunt!
*/
```

### You can generate whole song
```js
  xxSharkDoo('Baby') +
  xxSharkDoo('Mommy') +
  xxSharkDoo('Daddy') +
  xxSharkDoo('Grandpa') +
  xxSharkDoo("Let's go hunt", 1) +
  xxSharkDoo('Run away') +
  xxSharkDoo('Safe at last') +
  xxSharkDoo("It's the end")
```

#### Or just use integrated `babySharksong` function
```js
// use babySharksong function, for generating original text of the song
console.log(babySharksong())
/*
Baby shark, doo doo doo doo doo doo 
Baby shark, doo doo doo doo doo doo 
Baby shark, doo doo doo doo doo doo 
Baby shark!
Mommy shark, doo doo doo doo doo doo 
Mommy shark, doo doo doo doo doo doo 
Mommy shark, doo doo doo doo doo doo 
Mommy shark!
Daddy shark, doo doo doo doo doo doo 
Daddy shark, doo doo doo doo doo doo 
Daddy shark, doo doo doo doo doo doo 
Daddy shark!
Grandpa shark, doo doo doo doo doo doo 
Grandpa shark, doo doo doo doo doo doo 
Grandpa shark, doo doo doo doo doo doo 
Grandpa shark!
Let's go hunt, doo doo doo doo doo doo 
Let's go hunt, doo doo doo doo doo doo 
Let's go hunt, doo doo doo doo doo doo 
Let's go hunt!
Run away shark, doo doo doo doo doo doo 
Run away shark, doo doo doo doo doo doo 
Run away shark, doo doo doo doo doo doo 
Run away shark!
Safe at last shark, doo doo doo doo doo doo 
Safe at last shark, doo doo doo doo doo doo 
Safe at last shark, doo doo doo doo doo doo 
Safe at last shark!
It's the end shark, doo doo doo doo doo doo 
It's the end shark, doo doo doo doo doo doo 
It's the end shark, doo doo doo doo doo doo 
It's the end shark!*/
```

[Play the song 🐟](https://www.youtube.com/watch?v=XqZsoesa55w)