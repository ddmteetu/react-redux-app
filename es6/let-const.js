var name = "Vishvendra";

if (name == "Vishvendra") {
  let fullName = "Vishvendra Singh";
  let age = 21;
  age = 41; // 'let' variables can be updated
}

console.log(age); // not accessible as 'const' & 'let' are 'block' scoped

// Exception to 'const'
const person = {
  name: 'Bill',
  gender: 'male'
};

// 'properties' of a 'const' object can be updated
person.name = 'Jane';
person.gender = 'Female';

console.log(person.name);
console.log(person.gender);
