const names = ['John', 'Bill', 'Sam'];
const moreNames = ['William', 'Paul', 'Mike'];
console.log(...names);

// ['John', 'Bill', 'Sam', 'Gio', 'William', 'Paul', 'Mike']

let allNames = [];
allNames = allNames.concat(names); // ['John', 'Bill', 'Sam'];
allNames.push('Gio'); // ['John', 'Bill', 'Sam', 'Gio'];
allNames = allNames.concat(moreNames); // ['John', 'Bill', 'Sam', 'Gio', 'William', 'Paul', 'Mike'];

console.log(allNames);

const allNames2 = [...names, 'Gio', ...moreNames];

console.log(allNames2);
