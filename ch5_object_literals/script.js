// CREATE AN OBJECT LITERAL
let user1 = {
    name: 'Elliot Alderson',

    age: 27,

    email: 'samsepiol@fsociety.com',

    location: 'Washington Township, New Jersey',

    skills: ['programming', 'networking', 'social engineering', 'cryptography', 'cyber security'],

    login: function() {console.log('the user has logged in');},

    logout: function() {console.log('the user has logged out');},

    showSkills: function() {
        //console.log(this);

        //console.log(this.skills);

        this.skills.forEach(skill => console.log(`* ${skill}`));
    },

    useNormalFunc: function() {console.log(this);},

    useArrowFunc: () => {console.log(this);},

    useRegularFunc() {
        console.log('property_name() {}: another way to define a regular function on an object');

        console.log(this);
    },

    books: [
        {title: 'Fahrenheit 451', pages: 249},

        {title: 'Lord of the Flies', pages: 224},

        {title: 'Animal Farm', pages: 140},

        {title: 'Brave New World', pages: 288},

        {title: '1984', pages: 328}
    ],

    showBooks() {
        this.books.forEach(book => console.log(`* Book title: ${book.title} - pages: ${book.pages}`));
    }
};

console.log(user1);

console.log(user1.name); // access the object's name property using dot notation

user1.age = 30; // update the object's age property using dot notation

console.log(user1.age);

console.log(user1['email']); // access the object's name property using square bracket notation

user1['location'] = 'Coney Island, New York'; // update the object's age property using square bracket notation

console.log(user1['location']);

console.log(typeof user1);

console.log('---------------------------------------------------------------------------------------');

// ADDING METHODS
user1.login(); // the login() method is a function that's defined on the user1 object

user1.logout();

console.log('---------------------------------------------------------------------------------------');

// THE 'THIS' KEYWORD
user1.showSkills();

console.log(this);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// when a regular function is used to create a method, the value of 'this' is user1
user1.useNormalFunc();

// when an arrow function is used to create a method, the value of 'this' is the global window object 
user1.useArrowFunc();

user1.useRegularFunc();

console.log('---------------------------------------------------------------------------------------');

// OBJECTS IN ARRAYS
user1.showBooks();

console.log('---------------------------------------------------------------------------------------');

// THE MATH OBJECT
console.log(Math);

console.log(Math.PI);

console.log(Math.E);

console.log(Math.round(7.6)); // 8

console.log(Math.round(7.5)); // 8

console.log(Math.round(7.4)); // 7

console.log(Math.floor(8.9)); // 8

console.log(Math.ceil(8.1)); // 9

console.log(Math.trunc(6.6)); // trunc() removes the decimal -> 6 

// generate random numbers
console.log(Math.random()); // create a random number between 0 & almost 1

console.log(Math.round(Math.random())); // create a number which is either 0 or 1

console.log(Math.round(Math.random() * 100)); // create a random number between 1 & 100

console.log('---------------------------------------------------------------------------------------');

// PRIMITIVE TYPES VS REFERENCE TYPES
// primitive types
let value1 = 7;

let value2 = value1;

console.log(`value1: ${value1} | value2: ${value2}`);

value1 = 13;

console.log(`value1: ${value1} | value2: ${value2}`);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// reference types
const user2 = {name: 'Maynard Keenan', age: 56};

const user3 = user2;

console.log(user2);

console.log(user3);

user2.name = 'Adam Jones';

user2.age = 55;

console.log(user2);

console.log(user3);