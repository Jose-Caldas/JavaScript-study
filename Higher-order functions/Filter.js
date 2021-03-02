// //retornar item maior que 37

// const ramdomNumbers = [36, 99, 37, 63];

// const numbersGreaterThan37 = ramdomNumbers.filter((item) => item > 37);

// //Buscar filmes lançados antes de 2000

// console.log(numbersGreaterThan37);

// const tarantinoMovies = [
//   { name: "Bastardos Inglorius", release: 2009 },
//   { name: "Pump Fiction", release: 1994 },
//   { name: "Kill Bill: Vol 2", release: 2004 },
//   { name: "Quatro Quartos", release: 1995 },
//   { name: "Sin City", release: 2005 },
//   { name: "Era uma vez em...Hollywood", release: 2019 },
//   { name: "Django Livre", release: 2012 },
//   { name: "Cães de Aluguel", release: 1992 },
//   { name: "À Prova de Morte", release: 2007 },
//   { name: "Kill Bill: Vol 1", release: 2003 },
// ];

// const moviesBefore2000 = tarantinoMovies.filter(
//   ({ release }) => release < 2000
// );
// console.log(moviesBefore2000);
// console.table(moviesBefore2000);

// //cidades em comum

const firstTravelerCities = [
  "Sydney",
  "Berlim",
  "Lisboa",
  "Sofia",
  "Madri",
  "Londres",
];

const secondTravelerCities = [
  "Praga",
  "Curitiba",
  "Sofia",
  "Fortaleza",
  "Lisboa",
];

const commonCities = firstTravelerCities.filter((city) =>
  secondTravelerCities.includes(city)
);

console.log(commonCities);
