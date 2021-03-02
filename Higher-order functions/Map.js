//Higher-order functions

// map()

// const numbers = [1, 2, 3];
// const squareNumbers = numbers.map((item) => item ** 2); //elevado a potência

// console.log(squareNumbers);

// const tvShows = [
//   { name: "Breaking Bad", releaseYear: 2008 },
//   { name: "Mr. Robot", releaseYear: 2015 },
//   { name: "True Detctive", releaseYear: 2014 },
//   { name: "Hannibal", releaseYear: 2013 },
//   { name: "House M.D.", releaseYear: 2004 },
//   { name: "Watchmen", releaseYear: 2019 },
// ];

// const showNames = tvShows.map((tvShow) => tvShow.name);

// console.log(showNames);
// // console.table(showNames);

// =========================================================== Refaturando o código

const tvShows = [
  { name: "Breaking Bad", releaseYear: 2008 },
  { name: "Mr. Robot", releaseYear: 2015 },
  { name: "True Detctive", releaseYear: 2014 },
  { name: "Hannibal", releaseYear: 2013 },
  { name: "House M.D.", releaseYear: 2004 },
  { name: "Watchmen", releaseYear: 2019 },
];
const showNames = tvShows.map(({ name }) => name);

console.log(showNames);
