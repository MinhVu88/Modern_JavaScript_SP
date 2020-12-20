// filter() -> a non-destructive array method, meaning it doens't alter the original array over which it iterates
// it just returns a new array based on some condition
// filter() loops thru the original array & fires a callback for each item in it
// inside the callback, filter() returns either true or false for each item
// true -> that item is kept in the new array, false -> otherwise
const scores = [23, 7, 84, 69, 3, 51, 8, 13];

const filteredScores = scores.filter(score => {
    return score < 15;
});

console.log(scores);

console.log(filteredScores);

console.log(scores);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

const users = [
    {name: 'Elliot Alderson', alive: true},
    {name: 'Darlene Alderson', alive: true},
    {name: 'Angela Moss', alive: false},
    {name: 'Tyrell Wellick', alive: false}
];

const aliveUsers = users.filter(user => user.alive);

console.log(users);

console.log(aliveUsers);

console.log(users);

console.log('---------------------------------------------------------------------------------------');

// map() -> a non-destructive array method, meaning it doens't alter the original array over which it iterates
// it just returns a new array based on some condition
const prices = [3, 1, 51, 13, 45, 19, 7];

const salePrices = prices.map(price => price / 2);

console.log(prices);

console.log(salePrices);

console.log(prices);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

const products = [
    {name: 'laptop', price: 84},
    {name: 'keyboard', price: 23},
    {name: 'usb', price: 7},
    {name: 'mouse', price: 51},
    {name: 'AC adapter', price: 11}
];

const saleProducts = products.map(product => {
    if(product.price > 30) {
        // return a new object
        return {name: product.name, price: product.price / 2};

        /* why is it not recommended to do the following:

                    product.price = product.price / 2;

                    return product;
        
        -> if we do that, we directly alter the product object's price property in the original array, which is products
        
        -> and that makes map() no longer non-destructive

        -> we want to protect the products array & only update objects in saleProducts

        -> thus we need to create & return a new product object or a copy of the original one which should be left untouched
         */
    } else {
        return product; // products whose prices aren't over 30 should still remain in the new array
    }
});

console.log(products);

console.log(saleProducts);

console.log(products);

console.log('---------------------------------------------------------------------------------------');

// reduce() doesn't necessarily return an updated array of the original one, like filter() & map()
// it still iterates over an array performing a callback on each item but what it returns is
// any single value (an array, a string or a number) based on the items' values in the original array
// for the example below, the 2nd arg of reduce() means accumulator's value starts at 0
// and each time a score that's over 30 is found in scores, accumulator increases by 1 
const result = scores.reduce((accumulator, current_element) => {
    if(current_element > 30) {
        accumulator++;
    }

    return accumulator;
}, 0);

console.log(`the number of scores that are over 30: ${result}`);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

const gameScores = [
    {player: 'mario', score: 8},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 51},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 23},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 7},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 69},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 47},
    {player: 'crystal', score: 60}
];

const totalMarioScores = gameScores.reduce((acc, curr) => {
    if(curr.player === 'mario') {
        acc += curr.score;
    }

    return acc;
}, 0);

console.log(`Mario's total scores: ${totalMarioScores}`);

console.log('---------------------------------------------------------------------------------------');

// find() returns the 1st element's value in an array that passes a certain test in a callback
// that's also where it stops iterating the array
const firstScoreBelow5 = scores.find(score => {
    return score < 5;
});

console.log(firstScoreBelow5);

const firstPriceOver30 = prices.find(price => price > 30);

console.log(firstPriceOver30);

console.log('---------------------------------------------------------------------------------------');

// sort() -> a destructive array method as it alters the original array 
// whose elements are sorted as strings by default, regardless of their data type
// 1. sorting strings alphabetically by default
const names = ['Elliot Alderson', 'Darlene Alderson', 'Angela Moss', 'Tyrell Wellick', 'Phillip Price'];

console.log(names);

names.reverse();

console.log(names);

names.sort();

names.reverse();

console.log(names);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// 2. sorting numbers also alphabetically by default 
console.log(scores);

scores.reverse();

console.log(scores);

// this's actually a string comparison & it's ordering the numbers based on their Unicode codes
// literally, all elements are converted to strings for comparisons 
// hence the weird, incorrect resulting order
scores.sort(); 

console.log(scores);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// 3. sorting objects: sort the characters array
/*
  - sort() iterates over the array & sort its elements/objects based on their ages (numeric data type)
 
  - However, characters.sort() doesn't work as sort() isn't designed to automatically know what to sort by (name or age)
    when dealing with complex data types such as objects in an array
 
  -> Solution: sort() takes a callback (the compare function) as its arg, which's invoked multiple times during the iteration process. 
               The callback takes 2 params (a & b) that represent every 2 consecutive elements in an array & then
               repeatedly compare them against each other to produce a particular type of order.
               The comparison's achieved by either subtracting a from b or b from a.
               * Ascending order (lowest -> highest): a - b
               * Descending order (highest -> lowest): b - a
               * No ordering needed: a = b
*/
/** online references:
 * 
 * ref #1: https://www.youtube.com/watch?v=zVevl-K-m7Y&pbjreload=10
 * 
 * ref #2: https://javascript.info/array-methods
 * 
 * ref #3: https://stackoverflow.com/questions/6567941/how-does-sort-function-work-in-javascript-along-with-compare-function
 * 
 * ref #4: https://stackoverflow.com/questions/1494713/how-does-javascripts-sort-work
 * 
 * ref #5: https://stackoverflow.com/questions/6638057/how-does-array-sort-work?noredirect=1&lq=1
 * 
 * ref #6: https://stackoverflow.com/questions/41121068/how-does-javascripts-sort-comparefunction-work?noredirect=1&lq=1
 * 
 * ref #7: https://itnext.io/how-to-sort-an-array-in-javascript-f6cc7a26b34d
 * 
 * ref #8: https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values?rq=1
 * 
 * ref #9: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value?rq=1
 * 
 * ref #10: https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript?rq=1
 */ 
const characters = [
    {name: 'Elliot Alderson', age: 47},
    {name: 'Darlene Alderson', age: 23},
    {name: 'Phillip Price', age: 88},
    {name: 'Angela Moss', age: 13},
    {name: 'Tyrell Wellick', age: 35}
];

/*
// Version 1 (verbose one)
characters.sort((a, b) => {
    if(a.age > b.age) {
        return -1; // a before b in a sorted array
    } else if(a.age < b.age) {
        return 1; // b before a in a sorted array
    } else {
        return 0; // no ordering needed/no sorting performed
    }
});

console.log(characters);
*/

// Version 2 (concise one)
characters.sort((a, b) => {
    console.log(`comparing ${a.age} & ${b.age}`);

    return a.age - b.age;
});

console.log(characters);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// applying the compare function to the scores array produces the correct order
scores.sort((a, b) => b - a);

console.log(scores);

console.log('---------------------------------------------------------------------------------------');

// chaining array methods
// 1st: filter the goods array | 2nd: map the filtered array
const goods = [
    {name: 'chair', price: 51},
    {name: 'table', price: 88},
    {name: 'wardrobe', price: 47},
    {name: 'light bulb', price: 7},
    {name: 'mug', price: 18},
    {name: 'spoon', price: 3}
];

// Version 1: without using method chaining
const filtered = goods.filter(i => i.price > 20);

const saleGoods_1 = filtered.map(i => `The ${i.name} is on sale (${i.price} -> ${i.price / 2})`);

console.log(saleGoods_1);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// Version 2: use method chaining (recommended)
const saleGoods_2 = goods
                         .filter(i => i.price > 20)
                         .map(i => `The ${i.name} is on sale (${i.price} -> ${i.price / 2})`);

console.log(saleGoods_2);