var name = "Vishvendra";

if (name == "Vishvendra") {
  let fullName = "Vishvendra Singh";
  const age = 21;
  age = 41; // throws an error as 'const' variable can not be updated
}

console.log(age); // not accessible as 'const' is 'block' scoped
