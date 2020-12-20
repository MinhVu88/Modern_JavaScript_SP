// store data in local storage
// setItem() takes 2 args -> arg #1: key | arg #2: value
// everything stored in local storage must be a string -> when a number's stored in local storage, it's automatically converted into a string
localStorage.setItem('name', 'Maynard Keenan');

localStorage.setItem('age', 56);

// retrieve data from local storage
let name = localStorage.getItem('name');

let age = localStorage.getItem('age');

console.log(name, age);

// update existing data in local storage
localStorage.setItem('name', 'Adam Jones');

name = localStorage.getItem('name');

localStorage.age = '55'; // update data using dot notation

age = localStorage.getItem('age');

console.log(name, age);

console.log('---------------------------------------------------------------------------------------');

// delete data from local storage
// remove 1 item
localStorage.removeItem('name');

console.log(localStorage.getItem('name'));

// remove all
localStorage.clear();

console.log(localStorage.getItem('age'), localStorage.getItem('tasks'));

console.log('---------------------------------------------------------------------------------------');

// stringifying & parsing data
// turn an array of objects into a JSON string using a JSON object's method called stringify()
// as everything stored in local storage must be a string, a JSON string is good to go
const characters = [
    {name: 'Elliot Alderson', age: 47},
    {name: 'Darlene Alderson', age: 23},
    {name: 'Phillip Price', age: 88},
    {name: 'Angela Moss', age: 13},
    {name: 'Tyrell Wellick', age: 35}
];

console.log(JSON.stringify(characters));

localStorage.setItem('characters', JSON.stringify(characters));

// turn a JSON string into an array of objects using a JSON object's method called parse()
console.log(JSON.parse(localStorage.getItem('characters')));