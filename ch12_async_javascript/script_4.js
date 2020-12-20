const getJSON = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);

            callback(undefined, data);
        } else if(request.readyState === 4) {
            callback('unable to fetch the data', undefined);
        }
    });

    request.open('GET', resource);

    request.send();
};

// CALLBACK HELL (nesting callback within callback within callback....and so on)
// these callbacks are invoked sequentially -> the outermost is called 1st & the innermost is called last
/*
  Arg #1: 'json/some_JSON_file.json' -> resource

  Arg #2: (error, data) -> callback
*/
getJSON('json/movies.json', (error, data) => {
    console.log(data);
    
    getJSON('json/songs.json', (error, data) => {
        console.log(data);

        getJSON('json/books.json', (error, data) => {
            console.log(data);
        });
    });
});