const { babySharksong, xxSharkDoo } = require('./index')

test('Outputs Baby shark song', () => {
  const lyrics = `Baby shark, doo doo doo doo doo doo 
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
It's the end shark!
`;

  expect(babySharksong()).toBe(lyrics);
});