// REST PARAMETER: allows us to bundle up args inside a function into a single array parameter 
const doubled_nums = (...nums_array) => {
    console.log(nums_array);

    return nums_array.map(num => num*2);
};

console.log(doubled_nums(7, 3, 9, 5, 1, 8, 2, 6, 4, 0));

console.log('---------------------------------------------------------------------------------------');

// SPREAD SYNTAX (arrays): decentralizes an array's elements into individual components
const tool_0 = ['Maynard Keenan', 'Adam Jones', 'Dan Carey'];

console.log(...tool_0);

const tool_1 = ['Justin Chancellor', 'Paul DAmour', ...tool_0];

console.log(tool_1);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// SPREAD SYNTAX (objects): unpack an object's properties in individual components
const person_0 = {name: 'Shaun', age: 30, job: 'ninja'};

// this does NOT clone the person_0 object as objects are reference types 
// meaning this just creates a new pointer to a same object in memory, which's shared by both person_0 & not_a_clone
not_a_clone = person_0; 

console.log(person_0 === not_a_clone); // true as both point to the same object in memory

// make a brand-new, distinct object that's a clone/copy of person_0 
const clone_0 = {...person_0}; 

console.log(person_0 === clone_0); // false as each one points to a different object in memory

console.log(person_0, clone_0);

// still a person_0 clone but this copy has some extra properties
const clone_1 = {...person_0, gender: 'male', location: 'Manchester'}; 

console.log(person_0 === clone_1); // false

console.log(person_0, clone_1);

console.log('---------------------------------------------------------------------------------------');

// SETS: a new data structure in the object category (a reference type) that allows NO duplicate values
const fsociety_array = ['mrrobot', 'Trenton', 'Darlene', 'mrrobot', 'Romero', 'Mobley'];

console.log(fsociety_array);

const fsociety_set = new Set(fsociety_array);

console.log(fsociety_set);

const non_duplicate_fsociety = [...fsociety_set];

console.log(non_duplicate_fsociety);

const unique_fsociety = [...new Set(fsociety_array)];

console.log(unique_fsociety);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// set methods & properties
const unique_values = new Set();

unique_values.add(7);

console.log(unique_values);

unique_values.add(18).add(23).add(7).add(51).add(3).add(47).add(88);

console.log(unique_values);

unique_values.delete(47);

console.log(unique_values);

console.log(unique_values.size);

console.log(unique_values.has(23));

unique_values.clear();

console.log(unique_values);

const products_set = new Set([
    {name: 'laptop', price: 84},
    {name: 'keyboard', price: 23},
    {name: 'usb', price: 7},
    {name: 'mouse', price: 51},
    {name: 'AC adapter', price: 11}
]);

products_set.forEach(product => console.log(product.name, product.price));

console.log('---------------------------------------------------------------------------------------');

// THE SYMBOL PRIMITIVE TYPE: a symbol is a completely unique value, NO 2 symbols are ever identical to each other
// symbols can be used as keys/property names in objects
const symbol0 = Symbol();

console.log(symbol0, typeof symbol0);

const symbol1 = Symbol();

console.log(symbol1, typeof symbol1);

console.log(symbol0 === symbol1);

console.log(symbol0 == symbol1);

const symbol2 = Symbol('i am unique');

const symbol3 = Symbol('i am unique');

console.log(symbol2, symbol3);

console.log(symbol2 === symbol3);

const person_1 = {};

person_1.age = 17;

person_1['skill'] = 'hacking';

console.log(person_1);

person_1['skill'] = 'social engineering'; // the skill property has been overwritten

console.log(person_1);

person_1[symbol2] = 'the mastermind';

person_1[symbol3] = 'mrrobot';

console.log(person_1);