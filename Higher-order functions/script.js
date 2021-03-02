//função que recebe uma função como argumento

// document.addEventListener("click", handleDocumentClick);

// function handleDocumentClick() {
//   console.log("Clicou no documento!");
// }

// Uma função que retorna uma função

// function doble(aNumber) {
//   return aNumber * 2;
// }
// console.log(doble(9));

// function triple(aNumber) {
//   return aNumber * 3;
// }
// console.log(triple(9));

// function quadruple(aNumber) {
//   return aNumber * 4;
// }
// console.log(quadruple(9));

// ============================================== criando função que retorna uma função

// function getMultiplier(multiplier) {
//   return function (aNumber) {
//     return aNumber * multiplier;
//   };
// }

// const doble = getMultiplier(2);
// const triple = getMultiplier(3);
// const quadruple = getMultiplier(4);

// console.log(doble(5));
// console.log(triple(5));
// console.log(quadruple(5));

// ================================================================== melhorando o código

const getMultiplier = (multiplier) => (aNumber) => aNumber * multiplier;

const doble = getMultiplier(2);
const triple = getMultiplier(3);
const quadruple = getMultiplier(4);

console.log(doble(5));
console.log(triple(5));
console.log(quadruple(5));
