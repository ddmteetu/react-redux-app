var name = "Vishvendra Singh";
console.log(name);
name = "Rayan";
console.log(name);


// Scopes
/* function printName() {
	var name2 = "Vishvendra Singh";
  	console.log(name2);
}
console.log(name2);

printName();*/

var name3 = "Vishvendra";

if (name3 == "Vishvendra") {
  let fullName = "Vishvendra Singh";
}

// 'let' variables are 'block' scoped, can not access below
console.log(fullName); // 'var' is 'function' scoped
