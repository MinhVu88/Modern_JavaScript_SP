// THE QUERY SELECTOR
/*
- Step 1: decide which element/node on the page we want to interact with
  & then reach into the DOM & get a reference on that element/node (querying the DOM)

- Step 2: do something with the element/node 
*/
const p1 = document.querySelector('p');

console.log(p1);

const p2 = document.querySelector('.error');

console.log(p2);

const p3 = document.querySelector('div.error');

console.log(p3);

const h1 = document.querySelector('body > h1');

console.log(h1);

// querySelectorAll() returns a node list that looks like an array but it's not
// but we can use square bracket notation to select a single element from a node list
// or forEach to iterate over a list's elements
const p_nodeList = document.querySelectorAll('p');

console.log(p_nodeList);

console.log(p_nodeList[1]);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

p_nodeList.forEach(p => console.log(p));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

const e_nodeList = document.querySelectorAll('.error');

console.log(e_nodeList);

console.log('---------------------------------------------------------------------------------------');

// OTHER WAYS TO QUERY THE DOM
// 1) get an element by its id
const title = document.getElementById('title');

console.log(title);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// 2) get elements by their class names
// getElementsByClassName() returns an HTMLCollection, whose elements can be retrived using square bracket notation
// but forEach can't be used with this document method without converting the collection into an array 1st
const e_htmlCollection = document.getElementsByClassName('error');

console.log(e_htmlCollection);

console.log(e_htmlCollection[1]);

//errors2.forEach(error => console.log(error)); // Error!

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// 3) get elements by their tag names
// getElementsByTagName() also returns an HTMLCollection with elements retrieved using square bracket notation
// forEach can't be used with this document method without converting the collection into an array 1st
const p_htmlCollection = document.getElementsByTagName('p');

console.log(p_htmlCollection);

console.log(p_htmlCollection[2]);

console.log('---------------------------------------------------------------------------------------');

// ADDING & CHANGING PAGE CONTENT
console.log(p1.innerText); // innerText is a property that gets an element's inner text

p1.innerText = 'Our democracy has been hacked'; // update an element's inner text

p1.innerText += ' | Control is an illusion'; // append more strings to an existing element's inner text

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

p_nodeList.forEach(p => {
    console.log(p.innerText);

    p.innerText += ' (fsociety)';
});

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

const content = document.querySelector('.content');

console.log(content.innerHTML); // innerHTML is a property that gets an html content

content.innerHTML = '<h2>The Truth Is Out There</h2>'; // update an html content

content.innerHTML += '<h3>I Want To Believe</h3>';

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// output each item in an array as an html template to the browser 

const people = ['Fox Mulder', 'Dana Scully', 'John Doggett', 'Monica Reyes', 'Walter Skinner']

people.forEach(person => content.innerHTML += `<p>${person}</p>`);

console.log('---------------------------------------------------------------------------------------');

// GETTING & SETTING ATTRIBUTES
const link = document.querySelector('a');

console.log(link.getAttribute('href'));

// 1st arg: the attribute to be changed | 2nd arg: the new value for the changed attribute
link.setAttribute('href', 'https://en.wikipedia.org/wiki/Men_in_black');  

link.innerText = 'Men in Black Wiki';

console.log(p2.getAttribute('class')); // the class attribute's value is error

p2.setAttribute('class', 'success'); // set 'error' to 'success'

// adding new attributes to an html element
p2.setAttribute('style', 'color: red;');

console.log('---------------------------------------------------------------------------------------');

// CHANGING CSS STYLES
//h1.setAttribute('style', 'margin: 50px;') // this overwrites the element's current style(s)

console.log(h1.style); // the style property can be used to add or remove styles on the fly (recommended)

console.log(h1.style.color); // access the css property/current style of h1, color

h1.style.margin = '50px'; // add the css property, margin, to h1

h1.style.color = 'green'; // alter the color property's value

h1.style.fontSize = '60px';

h1.style.margin = ''; // remove a property
