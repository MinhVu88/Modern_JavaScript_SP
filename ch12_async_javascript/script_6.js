// FETCH API (a recommended way to fetch external or local json data, better than using XMLHttpRequest)
// with fetch api, a promise is rejected only when a network error occurs (the internet or the power is down, for example)
// a promise is still resolved & a response's still returned if the url/endpoint/resource is false
// however in DevTools console, the status of the response object (returned by fetch api) is 404 -> the resource can't be found
/* 4 steps to remember: 
    - 1: fetch the data

    - 2: take the response & return response.json(), which returns a promise

    - 3: a then() method is called on the promise & within then(), a function fires & gains access to the data

    - 4: a catch() method is called at the end to handle any rejected promise/error
*/
fetch('json/songs.json').then(response => {
    console.log('resolved: ', response);

    // access & return the JSON data by calling the response object's json() method, which is found in __proto__ of response in DevTools
    // json() parses the data (= JSON.parse(request.responseText)) & also returns a promise
    // following this returned promise, another then() can be attached to the previous then() to log out the data/response to the console
    // promises chaining is at hand
    return response.json();
}).then(data => console.log(data)).catch(error => console.log('rejected: ', error));