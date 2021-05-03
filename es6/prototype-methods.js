/* const person = {
  name: 'Bill',
  age: 50
};

console.log(person);*/

function Person(name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.speak = function() {
	console.log(`Hi my name is ${this.name}`);
};

const bill = new Person('Bill', 50);
bill.speak();

// console.log(bill);
