const Person = require("./lib/Person");

const firstPerson = new Person("Winters");
const secondPerson = new Person("Smith");


firstPerson.on('speak', function (said) {
  console.log(`${this.name} -> ${said}`);
});

secondPerson.on('speak', function (said) {
  console.log(`${this.name}: ${said}`);
});

firstPerson.emit('speak', "Hello world");
secondPerson.emit('speak', "Happy new year");
