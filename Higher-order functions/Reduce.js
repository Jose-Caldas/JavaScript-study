// Somando tos os números do array - reduzindo o array a um unico valor

//==================================================Number

// const numbers = [1, 2, 3];

// const sum = numbers.reduce((accumulator, item) => accumulator + item, 0);

// console.log(sum);

//===========================================String
/*
resultado desejado
- nome
- nome
- nome
- nome
*/

// const cart = [
//   { name: "Donkey Kong Country", price: 60 },
//   { name: "Tomb Rider", price: 70 },
//   { name: "The Legend of Zelda", price: 80 },
//   { name: "Far Cry", price: 65 },
//   { name: "Super Mario", price: 59 },
//   { name: "Doom", price: 55 },
// ];

// const listCart = cart.reduce(
//   (accumulator, { name }) => `${accumulator}- ${name}\n`, //  '\n' para quebra de linha
//   ""
// );

//===============================================objeto

/* 
resultado desejado

{18: 2, 19: 3, 20: 1 }
*/

// console.log(listCart);

const people = [
  { id: 1, name: "Angelica", age: 18, federativeUnit: "Pernambuco" },
  { id: 2, name: "Adriana", age: 19, federativeUnit: "Paraná" },
  { id: 3, name: "Paulo", age: 20, federativeUnit: "São Paulo" },
  { id: 4, name: "Pedro", age: 18, federativeUnit: "Minas Gerais" },
  { id: 5, name: "Maria", age: 19, federativeUnit: "Rio de Janeiro" },
  { id: 6, name: "Marcos", age: 19, federativeUnit: "Santa Catarina" },
];

const agesFrequency = people.reduce((accumulator, { age }) => {
  accumulator[age] = accumulator[age] + 1 || 1;
  return accumulator;
}, {});

console.log(agesFrequency);
