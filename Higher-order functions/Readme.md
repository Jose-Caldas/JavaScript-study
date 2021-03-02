https://www.youtube.com/watch?v=bdLkAm12pgI&ab_channel=RogerMelo

Higher-order functions

1 - É uma função que recebe uma função como argumento
2 - Uma função que retorna uma função

ou os dois

Função que recebe uma função como argumento
Uma função que retorna uma função

map()
O map recebe uma função como argumento, essa função pode receber 3 parâmetros numbers.map((item, index, array) => {});
Somente o parâmetro item é obrigatório na utilização do map()

Quando usar o map?
Quando quiser obter um novo array com a mesma quntidade de itens do array original mas, cada item transformado

exemplo:

const numbers = [1, 2, 3];
numbers.map(() => {});

filter()
Recebe uma função por argumento e executa essa função para cada item desse array.
Vai utilizar essa função quando quiser obter um novo array com só alguns itens do array original

filter recebe 3 parâmetros

filter(item,index,array) apenas item é obrigatório

vide scripts.js
