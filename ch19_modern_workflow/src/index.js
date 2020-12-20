// const greet_0 = name => console.log(`Bonsoir ${name}`);

// greet_0('Elliot Alderson');
// greet_0('Darlene Alderson');
// greet_0('Angela Moss');
// greet_0('Tyrell Wellick');
// greet_0('Dominique DiPierro');
// greet_0('fsociety');

// class User_0 {
//     constructor(name) {
//         this.name = name;
//     }

//     greet_1() {console.log(`Hello ${this.name}!`);}
// }

// const user0 = new User_0('Mr. Robot');

// user0.greet_1();

// const user1 = new User_0('Phillip Price');

// user1.greet_1();

import {styleBody, addTitle, email} from './dom.js';

console.log('index.js');

addTitle('Say hello to my little friend!');

styleBody();

console.log(email);

// import a default export (can be named anything here) from data.js
import members, {aliveUsers} from './data.js' 

members.forEach(member => console.log(member));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

aliveUsers.forEach(member => console.log(member));

console.log('test_0');