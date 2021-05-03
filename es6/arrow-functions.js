const integers = [1, 2, 3];

// map
/* const updatedIntegers = integers.map(function(number) {
	return number += 1;
});*/

// const updatedIntegers = integers.map(number => number += 1);

// const updatedIntegers = integers.map(() => "bob");

// console.log(updatedIntegers);

const ages = [23, 32, 6, 18];

/* const adults = ages.filter(function(age) {
	return age > 20;
});*/

const adults = ages.filter(age => age > 20);

console.log(adults);
