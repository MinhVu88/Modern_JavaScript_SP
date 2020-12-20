//alert('Hello world');

console.log(1); // log some value to the browser console

console.log(2);

console.log('---------------------------------------------------------------------------------------');

// variables: let, const & var (obsolete)
let age = 25;

let year = 2019;

console.log(age, year);

age = 30; // let can be reassigned with another value

year = 2024;

console.log(age, year);

const id = 47;

console.log(id);

//id = 23; // Error: const can't be reassigned/overwritten with another value

//console.log(id);

console.log('---------------------------------------------------------------------------------------');

// Data type #1: strings
console.log('Hello World');

let email = 'samsepiol@fsociety.com';

console.log(email);

let firstName = 'Elliot', lastName = 'Alderson';

console.log(firstName + ' ' + lastName); // string concatenation

console.log(firstName[3]); // get a single character in a string

console.log(lastName.length); // a string's length

console.log('mr. robot'.toUpperCase() + ' | ' + 'mr. robot'.toUpperCase().toLowerCase());

console.log(email.indexOf('@'));

console.log(email.lastIndexOf('s'));

console.log(email.slice(2, 5));

console.log(email.substr(4, 10));

// if there were multiple occurrences of 'a' in the string, only the 1st one would be replaced
console.log(email.replace('a', 'e'));

console.log('---------------------------------------------------------------------------------------');

// Data type #2: numbers
let radius = 10;

const pi = 3.14;

console.log(radius, pi);

console.log(radius / 2);

console.log(radius % 3);

console.log(pi * radius**2);

console.log(5 * (10 - 3)**2);

radius = radius + 1;

console.log(radius);

console.log(radius++);

console.log(radius--);

radius += 10;

console.log(radius);

radius -= 5;

console.log(radius);

radius *= 2;

console.log(radius);

radius /= 2;

console.log(radius);

console.log(radius / 'fsociety');

console.log(radius * 'fsociety');

console.log('the circle has ' + radius + ' centimeters');

console.log('---------------------------------------------------------------------------------------');

// template strings
const author = 'Philip K. Dick';

const book = 'Do Androids Dream of Electric Sheep?';

const pages = 240;

console.log(`the book '${book}' is written by ${author} & has ${pages} pages`);

console.log(`
    <h1>The book's title: ${book}</h1>

    <p>By the author: ${author}</p>

    <span>It has ${pages} pages</span>
`);

console.log('---------------------------------------------------------------------------------------');

// Data type #3: arrays & some array methods
let books = ['Fahrenheit 451', 'A Scanner Darkly', 'Animal Farm', 'Brave New World', "The Handmaid's Tale"];

console.log(books);

console.log(books[2]);

books[2] = 1984;

console.log(books);

console.log(books[2]);

console.log(books.length);

console.log(books.join(' | '));

console.log(books.indexOf('A Scanner Darkly'));

// concat() concatenates another array to an existing one without altering the latter
console.log(books.concat(['The Time Machine', 'The Road']));

books.push('Dune'); // push() adds a new element to an array, thus alters its length

console.log(books);

console.log(books.pop()); // retrieve the array's last element

console.log('---------------------------------------------------------------------------------------');

// Data type #4 & #5: null & undefined
let value1;

console.log(value1, value1 + 7, `the value is ${value1}`);

let value2 = null;

console.log(value2, value2 + 3, `the value is ${value2}`);

console.log('---------------------------------------------------------------------------------------');

// Data type #6: booleans & comparison operators
// == & != -> loose comparison: the same values with different data types can still be equal (ex: 25 == '25' -> true)
// === & !== -> strict comparison (recommended): the same values with different data types can't be equal (ex: 25 === '25' -> false)
console.log(true, false, 'true', 'false');

console.log(email.includes('@')); // true

console.log(books.includes('The Time Machine')); // false

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

let value3 = 23;

console.log(value3 === 23);

console.log(value3 === 32);

console.log(value3 !== 47);

console.log(value3 > 13);

console.log(value3 >= 51);

console.log(value3 < 69);

console.log(value3 <= 8);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

let value4 = 'maynard';

console.log(value4 === 'maynard');

console.log(value4 === 'Maynard');

console.log(value4 > 'Maynard');

console.log(value4 > 'adam');

console.log(value4 > 'Adam');

console.log('---------------------------------------------------------------------------------------');

// type conversion
console.log(Number('369'), typeof Number('369'));

console.log(Number('369') + 7);

console.log(Number('fsociety'), typeof Number('fsociety'));

console.log(String(420), typeof String(420));

console.log(Boolean(0), typeof Boolean(0));

console.log(Boolean(''), typeof Boolean(''));