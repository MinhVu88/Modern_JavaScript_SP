// ASYNC CODE IN ACTION
console.log('async code in action');
console.log(1);
console.log(2);

/*
  - The callback in setTimeOut() emulates some kind of network request that takes time to process

  - So imagine the callback sends a request to an external source (a database, a remote server or an api), 
    outside of this js program's thread, to fetch some data

  - In the meantime, all the other functions or statements after setTimeOut() are being invoked or processed as usual

  - After 5 seconds, the requested data comes back, by that time every other function or statement has also finished running

  - Only then the callback is invoked & tackles the data 
  
  - Thus it doesn't block other functions/statements after setTimeOut() from being called or processed

  => The bottom line for async code in js: something starts now but will finish later
*/ 
setTimeout(() => {
    console.log('callback function fired (async code in action)');
}, 5000);

console.log(3);
console.log(4);

console.log('---------------------------------------------------------------------------------------');

// MAKING HTTP REQUESTS (XHR)

/* The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in

  0 (unsent): Client has been created. open() not called yet

  1 (opened): open() has been called
        
  2 (headers_received): send() has been called & headers & status are available

  3 (loading): Downloading; responseText holds partial data

  4 (done): The operation is complete
*/

/* HTTP response status codes indicate whether a specific HTTP request has been successfully completed. 
   Responses are grouped in 5 classes:

  1. Informational responses (100–199)

  2. Successful responses (200–299)

  3. Redirects (300–399)

  4. Client errors (400–499)

  5. Server errors (500–599)
*/

const request = new XMLHttpRequest(); // create a request object that can work with any kind of data

// track a request's progress using an event listener called readystatechange
// this event occurs whenever there's a state change in the request 
// state change means request is going thru different phases during the process & there are 4 phases in total
request.addEventListener('readystatechange', () => {
  console.log(request);

  console.log(request.readyState); // readyState returns the state that the request's currently in

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

  // check the request's ready state & response status code
  if(request.readyState === 4 && request.status === 200) {
    console.log(request);

    console.log(request.responseText); // the responseText property contains the response data or JSON data (string)
  } else if(request.readyState === 4) {
    console.log('unable to fetch the data');
  }
});

/* the open() method sets up the request & takes 2 args: 

  -> arg #1: the request type as a string

  -> arg #2: where the request is sent to or the endpoint from which the data is retrieved
*/
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

//request_0.open('GET', 'https://jsonplaceholder.typicode.com/todoss/'); // a nonexistent endpoint

request.send(); // the send() method actually sends the request
