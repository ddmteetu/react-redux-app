class Person {
	constructor(name, age, children) {
    	this.name = name;
     	this.age = age;
      this. children = children;
    }
  speak() {
  	console.log(`Hi my name is ${this.name}`);
  }
  birth(child) {
  	this.children.push(child);
    return this.children;
  }
};

const bill = new Person('Bill', 50, ['Sean', 'Steph']);
bill.speak();
bill.birth('Jess');

console.log(bill.children);
// console.log(bill);
