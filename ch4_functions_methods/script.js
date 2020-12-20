// FUNCTION DECLARATIONS (hoisting: yes)
//function greet1() {console.log('Hi there');}

// FUNCTION EXPRESSIONS (hoisting: no)
const speak = function() {console.log('long time no see');};

greet1();

greet1();

function greet1() {console.log('Hi there');} // this function is hoisted to the top

speak();

speak();

console.log('---------------------------------------------------------------------------------------');

// ARGUMENTS & PARAMETERS
const greet2 = function(firstName, lastName) {
    console.log(`Bonsoir, ${firstName} ${lastName}`);
};

greet2('Elliot', 'Alderson');

const greet3 = function(firstName = 'Darlene', lastName = 'Alderson') {
    console.log(`Bonsoir, ${firstName} ${lastName}`);
};

greet3();

greet3('Tyrell', 'Wellick');

greet3('Edward');

console.log('---------------------------------------------------------------------------------------');

// RETURNING VALUES
const calcArea1 = function(radius) {
    return 3.14 * radius**2;
};

console.log(calcArea1(7));

console.log('---------------------------------------------------------------------------------------');

// ARROW FUNCTIONS
// version 1:
const calcArea2 = (radius) => {return 3.14 * radius**2;};

console.log(calcArea2(13));

// version 2: () can be removed as long as there's only 1 parameter
// () must be present when the number of parameters is either 0 or more than 1 
const calcArea3 = radius => {return 3.14 * radius**2;}

console.log(calcArea3(23));

// version 3: {} & return can be removed if there's only 1 simple return statement in the function's body
const calcArea4 = radius => 3.14 * radius**2;

console.log(calcArea4(32));

// exercise 1
const greet4a = function() {return 'Hi there';};

const greet4b = () => 'Hi there';

console.log(greet4b());

// exercise 2
const bill1 = function(products, tax) {
    let total = 0;

    for(let i = 0; i < products.length; i++) {
        total += products[i] + (products[i] * tax);
    }

    return total;
}

console.log(bill1([23, 7, 69], 0.3));

const bill2 = (products, tax) => {
    let total = 0;

    for(let i = 0; i < products.length; i++) {
        total += products[i] + (products[i] * tax);
    }

    return total;
}

console.log(bill2([51, 47, 3], 0.3));

console.log('---------------------------------------------------------------------------------------');

// FUNCTIONS VS METHODS (the distinction bw these 2 are how they're invoked & where they're defined)
// functions can be called individually without using dot notation
// functions are defined on its own, neither on an object nor associated with any data type
const greet5 = () => 'Hi there';

console.log(greet5());

// methods are called in the back of something using dot notation
// methods are functions that are defined on an object or associated with some data type
console.log('mr. robot'.toUpperCase());

console.log('---------------------------------------------------------------------------------------');

// FOREACH METHODS & CALLBACKS
// so far arguments which have been passed to a function are data types such as strings or numbers
// but a function or functions can also be another function's arguments/parameters as well
// functions that are passed to another function are called callbacks
const myFunc = (callbackFunc) => {callbackFunc(7);}

myFunc(function(value) {
    console.log(value);
});

myFunc(value => console.log(value));

// forEach is a built-in array method that iterates over an array & takes a callback as its argument
const names = ['Elliot Alderson', 'Darlene Alderson', 'Angela Moss', 'Tyrell Wellick', 'Phillip Price'];

names.forEach(function(name) {
    console.log(name);
});

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

names.forEach(name => console.log(name));

names.forEach((name, index) => console.log(`#${index + 1}: ${name}`));

const logName = (name, index) => console.log(`-> ${index + 1}: ${name}`);

names.forEach(logName);

console.log('---------------------------------------------------------------------------------------');

// FOREACH & CALLBACKS IN ACTION
const ul = document.querySelector('.names');

let html = ``;

names.forEach(name => 
    // create a html template
    html += `<li style="color: purple">${name}</li>`
);

console.log(html);

ul.innerHTML = html;