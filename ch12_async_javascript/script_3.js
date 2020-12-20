// JSON DATA (JSON = JavaScript Object Notation)
const getJSON = callback => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            // turn the response text/JSON data into an array of js objects by passing the data to the parse() method
            const data = JSON.parse(request.responseText);

            callback(undefined, data);
        } else if(request.readyState === 4) {
            callback('unable to fetch the data', undefined);
        }
    });

    request.open('GET', 'json/geniuses.json');

    request.send();
};

getJSON((error, data) => {
    console.log('callback fired');

    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});