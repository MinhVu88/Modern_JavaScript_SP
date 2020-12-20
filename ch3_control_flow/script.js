// for loops
for(let i = 0; i < 5; i++) {console.log(i);}

const names = ['Elliot Alderson', 'Oliver Parker', 'Darlene Alderson', 'Dominique DiPierro', 'Angela Moss', 'Tyrell Wellick', 'Phillip Price'];

for (let i = 0; i < names.length; i++) {
    //console.log(names[i]);

    console.log(`<div>${names[i]}</div>`);
}

console.log('---------------------------------------------------------------------------------------');

// while loops
let value1 = 0, i = 0;

while(value1 < 5) {
    console.log(value1);

    value1++;
}

while(i < names.length) {
    console.log(names[i]);

    i++;
}

console.log('---------------------------------------------------------------------------------------');

// do-while loops
let value2 = 0;

do {
    console.log(value2);

    value2++;
} while (value2 < 5);

console.log('---------------------------------------------------------------------------------------');

// if, else-if & else statements
let value3 = 47;

if(value3 < 50) {console.log(value3);}

if(names.length > 3) {console.log(names.length);}

if(names[0].length > 10) {console.log(names[0]);}

if(names[0].length > 812) {
    console.log(names[1]);
} else if(names[2].length < 812) {
    console.log(names[3]);
} else {
    console.log(names[4]);
}

console.log('---------------------------------------------------------------------------------------');

// logical operators (&& || !)
const password = 'Fsociety@4511984';

if(password.length >= 12 && password.includes('@')) {
    console.log('strong password');
} else if(password.length >= 8 || password.includes('@') && password.indexOf(0) === 'F') {
    console.log('mildly strong password');
} else {
    console.log('weak password');
}

let gainAccess = false;

if(!gainAccess) {
    console.log('Access Denied');
} else {
    console.log('Access Gained');
}

console.log('---------------------------------------------------------------------------------------');

// break & continue
for(let i = 0; i < names.length; i++) {
    if(names[i] === 'Oliver Parker') {continue;}
    
    console.log(names[i]);

    if(names[i] === 'Angela Moss') {
        console.log(`\t* ${names[i]} is shot & dead`);

        break;
    }
}

console.log('---------------------------------------------------------------------------------------');

// switch statements
const grade = 'D';

switch (grade) {
    case 'A':
        console.log('You got A');
    break;
    case 'B':
        console.log('You got B');
    break;
    case 'C':
        console.log('You got C');
    break;
    case 'D':
        console.log('You got D');
    break;
    case 'E':
        console.log('You got E');
    break;
    case 'F':
        console.log('You got F');
    break;
    default:
        console.log('invalid grade');
    break;
}

console.log('---------------------------------------------------------------------------------------');

// variables' & code blocks' scope 
let value4 = 13; // global scope

// error: can't declare another value4 in the same scope with the above value4
//let value4 = 47; 

if(true) {
    // it's ok to declare another value4 as it's not in the same scope with the 1st value4
    let value4 = 51; // local scope
    
    let name = 'whiterose';

    console.log(`inside an if statement: ${value4}, ${name}`);

    if(true) {
        let value4 = 69;

        // scope applies the same rules to let & const but not var, which ignores block scope
        var age = 7; // age can be accessed outside of these if statements

        console.log(`inside a nested if statement: ${value4}`);
    }
}

console.log(`outside an if statement: ${value4}, ${name} & ${age}`);