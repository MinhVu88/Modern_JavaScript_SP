// PROMISES
// demo
/*
- When using promises, the 1st thing we do is return a new promise

- A promise is something that takes time to do & ultimately leads to 2 outcomes

- Either a promise is resolved (some data is retrieved) or is rejected (some error occurs at some point)

- The promise in getSomething() takes an arrow function as its param, in which a hypothetical network request might occur

- The promise's arrow function automatically has access to the built-in resolve & reject params/functions

- If the network request successfully fetches JSON data, that data is passed to the resolve() function

- If the request encounters some error while fetching data, that error is passed to the reject() function
*/ 
const getSomething = () => {
    return new Promise((resolve, reject) => {
        // fetch some data
        //resolve('some data');

        reject('some error');
    });
};

// the 1st way to call getSomething(), which returns the new promise
// the then() method takes 2 args -> arg #1: a callback for resolve | arg #2: a callback for reject
//getSomething().then(data => console.log(data), error => console.log(error));

// the 2nd way to call getSomething()
getSomething().then(data => console.log(data)).catch(error => console.log(error));

// implementation
const getJSON = (resource, /*callback*/) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);

                //callback(undefined, data);

                resolve(data);
            } else if (request.readyState === 4) {
                //callback('unable to fetch the data', undefined);

                reject('Error getting resource');
            }
        });

        request.open('GET', resource);

        request.send();
    });
};

getJSON('json/books.json').then(data => console.log('promise resolved: ', data)).catch(error => console.log('promise rejected: ', error));

// CHAINING PROMISES (better than callback hell)
// calling getJSON() returns a new promise (a request is made for the 1st json file), a then() method is subsequently called on that new promise
// from within that then(), getJSON() is called again & thus a new promise is returned (another request is made for the 2nd json file)
// as a result, another then() is called on the new promise that's returned from within that then()
// this continues until a request is made for the last json file & finally the catch() method is called to tackle any rejected promise/error
// promise 1/a request for json file #1 🔗 promise 2/a request for json file #2 🔗 promise 3/a request for json file #3 🔗 promise 4/a request for json file #4 🔗 catch()
getJSON('json/songs.json').then(data => {
    console.log('promise 1 resolved: ', data);

    return getJSON('json/books.json');
}).then(data => {
    console.log('promise 2 resolved: ', data);

    return getJSON('json/movies.json');
}).then(data => {
    console.log('promise 3 resolved: ', data);

    return getJSON('json/geniuses.json');
}).then(data => console.log('promise 4 resolved: ', data))
  .catch(error => console.log('promise rejected: ', error));                          