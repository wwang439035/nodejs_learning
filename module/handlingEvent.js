const EventEmitter = require('events').EventEmitter;
const util = require('util');

const Person = function (name) {
  this.name = name;
};

util.inherits(Person, EventEmitter);

const person = new Person("Winters");

person.on('speak', function (said) {
  console.log(`${this.name}: ${said}`);
});

person.emit('speak', "Hello world!");
