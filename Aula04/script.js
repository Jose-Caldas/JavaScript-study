const double = (x) => x * 2;

console.log(double(9));

//////////////////////
//////////////
///////////////////////////

///////////////////indice 1/////indice2

const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material) => material.length));
// expected output: Array [8, 6, 7, 9]   mostra a quantidade de caracteres em cada elemento

// spread operator  ...    em Array

const num = [74, 210, 65, 58];
console.log(Math.max(...num)); // pega o maior número neste caso (210)

const myFavoriteSeries = ["Breaking Bad", "Prison Break"];

const dramaSeries = ["Dexter", ...myFavoriteSeries, "Bates Motel"]; // acrescenta myFavoriteSeries a esse array

console.log(dramaSeries);

// spread operator em objetos

const person = { nome: "José" };
const address = {
  city: "Guarapuava",
  state: "Paraná",
};

const jose = {
  ...person,
  ...address,
  country: "Brasil",
};

console.log(jose);
