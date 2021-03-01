Os 5 maiores erros ao nomear variáveis, funções e objetos - Clean Code 01 | JavaScript

# 1 Evite nomear sua variáveis com acrônimos, trava línguas, abrrviações ou siglas

const tmStpm;
const yyyymmdd;

## Prefira nomes que possam ser pronunciados e pesquisados

const timeStamp;
const currentDate;

# 2 Utilizar nomes que não revelam um intenção

Evite:

const result
const data

prefira:

const sumResult
const usersList

# 3 Adicionar contexto desnecessário

const person = {
personName = 'José',
personAge = '',
personProfession = 'estudando javaScript'
}

// prefira

const person = {
Name = 'José',
Age = 48,
Profession = 'estudando javaScript'
}

# 4 Utilizar curto-circuito ao invés de default parameters

const createBook = (name) => {
const bookName = name || "Jurassik Park";
};

//prefira

const createBook = (name = "Jurassic Park") => {};

# 5 Nomear com palavras ambíguas, que deixam pistas falsas

evite

const jp
const l
const maleUsersList = {

}

prefira

const japao
const lemon
const maleUsers{}
