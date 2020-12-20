// CALLBACK FUNCTIONS
const getTodos = callback => {
    const request = new XMLHttpRequest();
  
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        //console.log(request_1, request_1.responseText);
  
        // SUCCESS -> error = undefined & the JSON data/response text can be retrieved
        callback(undefined, request.responseText);
      } else if(request.readyState === 4) {
        //console.log('unable to fetch the data');
  
        // ERROR -> error = 'unable to fetch the data' & the response text = undefined
        callback('unable to fetch the data', undefined);
      }
    });
  
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  
    request.send();
  };
  
  console.log(5); // async code demo
  console.log(6);
  
  // getTodos() can be called multiple times & each call logs the same response data to the console
  // when we pass a callback function to getTodos() as an arg, which's invoked within getTodos()
  // invoking the callback inside getTodos() allows us to specify how we want to react in the callback
  // then every time we call getTodos(), we can specify a different kind of callback to do something different
  // the callback can take 2 args: arg #1: error | arg #2: data
  // these 2 args are dealt with accordingly in getTodos()
  getTodos((error, data) => {
    console.log('callback inside getTodos() fired');
  
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });
  
  console.log(7);
  console.log(8);