//destructuring assignment  Arry []

//
// const [firstNumber, secondNumber] = [5, 2, 6, 9];
// console.log(firstNumber, secondNumber);
// // expected output: 5 2

// const sumFirstAndThirdNumber = ([firstNumber, , thirdNumber]) =>
//   firstNumber + thirdNumber;

// console.log(sumFirstAndThirdNumber([6, 7, 9, 4]));

// Caso esteja faltando elementos no Array usa-se default parameter (= 0)

// const sumFirstAndThirdNumber = ([firstNumber, , thirdNumber = 0]) =>
//   firstNumber + thirdNumber;

// console.log(sumFirstAndThirdNumber([6, 7]));

//destructuring assignment  Object {}

// const dog = {
//   name: "Ellie",
//   breed: "Corli",
//   age: 5,
// };

// const { name, breed } = dog;
// console.log(name, breed);

// Template strings

const person = {
  name: "Jhon",
  age: 30,
  height: 1.82,
};

const { name, age, height } = person;

console.log(`${name} de ${age} anos de idade, tem ${height}m de altura`);
console.log(person);
