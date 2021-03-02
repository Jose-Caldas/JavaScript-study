class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    return `${this.name} está andando.`;
  }
}

var person = new Person("pedro");

console.log(person.name);

const person2 = (name) => ({
  name,
  walk() {
    return `${this.name} está andando`;
  },
});

console.log(person2("Joao").walk());
console.log(person2("Maria").walk());
