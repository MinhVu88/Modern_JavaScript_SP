// ADDING & REMOVING CLASSES FROM HTML ELEMENTS
const h3 = document.querySelector('#h-3');

console.log(h3.classList); // the classList property lists an element's class(es)

h3.classList.add('error'); // add a class

h3.classList.remove('error'); // remove a class

h3.classList.add('success');

console.log(h3.classList);

// a challenge: query & iterate thru all the p tags in index_2.html
// give any tag a class of error when 'error' is found inside that tag's text
// same with 'success'
const p_nodeList = document.querySelectorAll('p');

p_nodeList.forEach(p => {
    // innerText gets all visible text inside an element, except the hidden ones
    // textContent gets all the visible & hidden text inside an element
    if(p.textContent.includes('error')) {
        p.classList.add('error');
    } else if(p.textContent.includes('success')) {
        p.classList.add('success');
    }
});

// the toggle() method is used to toggle a class
// if an element has a class, that class will be taken off
// if an element doesn't have a class, toggle() will apply a class to that element
const title = document.querySelector('.title');

title.classList.toggle('test');

title.classList.toggle('test'); // calling toggle() again removes the class

console.log('---------------------------------------------------------------------------------------');

// PARENTS, CHILDREN & SIBLINGS (NODE RELATIONS IN THE DOM)
// parent -> children
const article = document.querySelector('article');

// the children property returns an HTMLCollection of html elements that an element contains -> article(children)
console.log(article.children);  

// in order to use forEach on an HTMLCollection, 1st convert the collection into an array
// by using an array method called from(), which doesn't permanently turn the collection into an array
console.log(Array.from(article.children));

console.log(article.children);

Array.from(article.children).forEach(child => child.classList.add('article-element'));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// child -> parent
const h2 = document.querySelector('h2');

// the parentElement property returns an element's parent -> article(h2)
console.log(h2.parentElement);

console.log(h2.parentElement.parentElement); // body(article(h2))

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// siblings
console.log(h2.nextElementSibling); // the p tag

console.log(h2.previousElementSibling); // null because h2 is the 1st element/oldest child in this 'article' family

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// more chaining to traverse the DOM & select different elements
console.log(h2.nextElementSibling.parentElement.children);
