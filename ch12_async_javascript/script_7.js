// ASYNC & AWAIT
/* 
- async & await are new js keywords that chain promises in a clean & more readble way

- They allow us to put our asynchronous code in an asynchronous function & then await is used inside to chain promises together

- To turn a regular arrow function into an asynchronous one, place 'async' after = and before ()

- When called, an async function always returns a promise, regardless of what's inside it
*/
const getJSON = async () => {
    /*
    - Previously with fetch api, a then() method is called on the promise returned by fetch(resource)
    
    - With async & await, await is used between fetch(resource) & a variable that receives the promise from fetch(resource)
    
    - await stalls the promise from being assigned to that var until the promise is resolved
    
    - Once it's resolved, the response object returned by the promise's resolve() function is assigned to that var
    
    - This delay doesn't block the program's remaining code from being executed as it occurs in a non-blocking async function
    */
    const response = await fetch('json/geniuses.json');

    //console.log(response);

    /*
    - Call the json() method on the response object to retrieve the JSON data
    
    - json() itself is asynchronous & returns a promise 
    
    - await is used here again to stall that promise from being assign to the var until that promise is resolved
    
    - This process now resembles promises chaining but is more concise as it eliminates using a bunch of then() methods
    */ 
    const data = await response.json();

    return data;
};

console.log(9); // async code demo
console.log(10);

// getJSON() always returns a promise, on which a then() is called once to access the data
getJSON().then(data => console.log('resolved:', data)).catch(error => console.log('error:', error));

console.log(11);
console.log(12);