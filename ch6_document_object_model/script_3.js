// EVENT BASICS (CLICK EVENTS)
/* Clicking a button ->
    - Step 1: query the DOM to get the element where an event is expected to happen
    - Step 2: add an event listener to that element
    - Step 3: specify the event type & write a callback function that fires when that event occurs
*/
const button = document.querySelector('button');

// addEventListener(1st arg, 2nd arg): 1st: the event type | 2nd: the callback
button.addEventListener('click', () => console.log('BUTTON CLICKED - event in button'));

// attach event listeners the 'li' tags in 'ul'
const li_nodeList = document.querySelectorAll('li');

/*
// view the clicked items
li_nodeList.forEach(li => li.addEventListener('click', () => console.log('ITEM CLICKED - event in li (child)')));

// when an event occurs in the browser like 'click' in the callback, 
// the browser automatically delivers a parameter called e, which is an event object
// calling the parameter e isn't mandatory but a convention
li_nodeList.forEach(li => li.addEventListener('click', e => {
    console.log(e);

    console.log(e.target); // access the event object's target property, which specifies the clicked item (recommended)

    console.log(li); // another way to access the clicked item

    // for the time being, let's delete a clicked item by striking thru it
    e.target.style.textDecoration = 'line-through';
}));
*/

/*---------------------------------------------------------------------------------------*/

// CREATING & REMOVING ELEMENTS
const ul = document.querySelector('ul');

//ul.remove(); // completely remove an element from the web page/the DOM

/*
// completely remove an li tag when it's clicked using an event object with its target property & removed()
li_nodeList.forEach(li => li.addEventListener('click', e => {
    console.log('ITEM REMOVED - event in li (child)');

    // stopPropagation() prevents event bubbling from happening at this point
    // -> the callback associated with the event listener attached to the ul won't be invoked
    // -> 'event in ul' won't show up in the browser console
    e.stopPropagation(); 

    e.target.remove();
}));
*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// attach an event listener to the button, so when it's clicked, a new element is added to the DOM
// version 1: append a new html template that contains an li tag to the ul 
//button.addEventListener('click', () => ul.innerHTML += '<li>New Item</li>');  

// version 2: use a DOM method called createElement() to create new elements
button.addEventListener('click', () => {
    const li = document.createElement('li');

    li.textContent = 'NEW ITEM';

    // insert the new element to the DOM without using html templates
    /* NOTE: these new elements (in this case, the li tags) are not removed when clicked because there's no event object (e) defined
             in the call to addEventListener() to target a specific element & subsequently apply remove() to eradicate it.
             The new elements here are simply added to the DOM.
             In order for the newly created elements to be removed when clicked, apply event delegation 
     */ 
    // method #1: append it to its parent
    ul.append(li);

    // method #2: prepend it to its parent
    ul.prepend(li);
});

/*---------------------------------------------------------------------------------------*/

// EVENT BUBBLING & EVENT DELEGATION
// 1) Event bubbling
// when an item/li is clicked & removed, the callback associated with the event listener attached to the li is invoked
// the act of invoking an li's callback bubbles up to its parent's callback, the ul, which is then invoked as well
// thus in the browser console, 'event in li (child)' is shown 1st & then 'event in ul (parent)' afterwards

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// 2) Event delegation
// attaching event listeners to many elements such as the li tags could affect negatively a program's performance
// besides, when new li tags are added to the DOM, event listeners aren't automatically attached to them -> they're not deleted when clicked
// the solution to those issues is using event delegation
// so to demonstrate event delegation, all event listeners attached to the li tags are commented out
// except for the event listener attached to the ul, that one remains
ul.addEventListener('click', e => {
    console.log('event in ul (parent)');

    // try to find out what exactly was initially clicked by 1st logging the event object to the console
    // then accessing the object's target property, once inside target, look for another property called tagName
    // the next step is checking whether tagName's value on the clicked target is 'LI'
    // if it were, then an li tag in the ul could be deleted when it's clicked
    // if it weren't, then the click might not be on an li tag but somewhere else
    // despite all this, the ul's callback will still fire up no matter what because of event bubbling
    console.log(e.target); 

    console.log(e);

    if(e.target.tagName === 'LI') {
        e.target.remove(); // remove the clicked item/li via the event target
    }
});  