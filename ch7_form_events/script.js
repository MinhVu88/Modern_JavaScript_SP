// SUBMIT EVENTS
// when we're listening for a submit event in a form that has a submit button,
// don't attach the event listener to the submit button, instead attach it to the form itself
// because ultimately it's the data entered into the form that gets submitted, not the button
// a submit event can occur due to clicking the submit button or 
// if the input field is in focus & we press enter without typing anything in it
// that's 1 of the advantages of using a submit event on the form over a click event on the button in this case
const form = document.querySelector('.signup-form');

const username = document.querySelector('#username');

const feedback = document.querySelector('.feedback');

const regex_pattern = /^[a-zA-Z]{6,12}$/; // make this constant's scope global so it can be accessed anywhere in the program

form.addEventListener('submit', e => {
    // when the button's clicked & the form's submitted, by default the web page refreshes quickly
    // that's the submit event's default action & we want to prevent it from happening:
    e.preventDefault();

    // get the actual data that the user types into the input field by using the value property (2 ways)
    // #1 -> username: the constant defined in script.js
    // with this way of getting user input, we have to create a query selector to refer to the username/input field
    console.log(username.value); 

    // #2 -> username: the id attribute's value defined in the form's input in index.html
    // with this way of getting user input, there's no need to create a query selector to refer to the username/input field
    // this method can be used with either the id attribute or the name attribute
    console.log(form.username.value);  

    // BASIC FORM VALIDATION
    // username criteria: only lowercase/uppercase letters, no numbers & symbols, between 6 & 12 characters in length 
    const user_name = form.username.value; 
    
    //const regex_pattern = /^[a-zA-Z]{6,12}$/; // local scope

    // validate the user input using regex_pattern
    if (regex_pattern.test(user_name)) {
        feedback.textContent = 'valid username';
    } else {
        feedback.textContent = 'invalid username';
    }
});

/*---------------------------------------------------------------------------------------*/

// KEYUP EVENTS: the act of lifting a key back up after pressing it down
form.username.addEventListener('keyup', e => {
    console.log(e);

    // e.target represents where the keyup event takes place or the place to which the event handler is attached
    // here the event handler is attached to form.username (the id attribute defined in the form's input in index.html)
    // so the input field is the event target & the value property returns the actual user input
    // so in this case, e.target.value & form.username.value are just 2 different ways of getting the same value
    console.log(e.target.value, form.username.value);

    // implement real-time validation behavior into the form/live feedback
    // set 2 class attributes, valid & invalid, for the input field & reference those in the style tags in index.html
    // that gives us the css effects which indicate whether or not the username is valid
    if(regex_pattern.test(e.target.value)) {
        console.log('-> Valid');

        // setAttribute() overwrites the input field's current state
        // meaning if the username were currently invalid & then subsequently valid, 
        // the input field's current class, which is invalid, would be overwritten & reset with a class of valid
        // thus the input field's border color might be red (invalid) initially, it'd be green (valid) afterwards
        form.username.setAttribute('class', 'valid');
    } else {
        console.log('-> Invalid');

        form.username.setAttribute('class', 'invalid');
    }
});

/*---------------------------------------------------------------------------------------*/

// TESTING REGEX PATTERNS
const user_name1 = 'james';

const regex_pattern1 = /[a-z]{6,}/; // lowercase letters only, at least 6 characters long or any length beyond that

// test() is a regex method that returns a boolean value indicating whether or not a pattern exists in a searched string
console.log(regex_pattern1.test(user_name1)); // false

const user_name2 = 'elliot';

console.log(regex_pattern1.test(user_name2)); // true

user_name3 = '@m0r7fsociety23ro#bot';

// true because although user_name3 contains letters, numbers & symbols placed together in a disorderly way, 
// the string 'fsociety' is still valid according to regex_pattern1
console.log(regex_pattern1.test(user_name3)); 

const regex_pattern2 = /^[a-z]{6,}$/;

// false because now for any string that matches regex_pattern2, 
// it must be alone by itself, not adjacent to any spaces, numbers or symbols
console.log(regex_pattern2.test(user_name3));

user_name4 = 'fsocietymrrobot';

console.log(regex_pattern2.test(user_name4)); // true

if(regex_pattern2.test(user_name4)) {
    console.log('valid username');
} else {
    console.log('invalid username');
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// the search() method is defined on a string & takes a regex pattern as its arg 
// it returns an integer that represents the position at which the string finds its match in the pattern
// -1 means no match found
console.log(user_name3.search(regex_pattern2)); 

// 0 means the match is found at position 0 or the string's 1st character (js is zero-based)
// because of the symbols ^ and $ in regex_pattern2, the match is always at 0 
console.log(user_name4.search(regex_pattern2));

// here the match is found at position 5 in user_name3 because in regex_pattern1, there are no symbols like ^ and $
console.log(user_name3.search(regex_pattern1));

console.log('---------------------------------------------------------------------------------------');