Arrow Function

Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).

function () {};

            para

() => {};

spread operator ... Pega um objeto iterável (como um array ou string ) e o desmembra em partes individuais, pode iterar por cada item no caso Array e por cada carcter no caso string

rest parameters ... Usada quando se quer transformar os argumentos de uma função em um array

(param1, param2, ...restParams) => (){}
