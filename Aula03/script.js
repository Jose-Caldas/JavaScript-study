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
