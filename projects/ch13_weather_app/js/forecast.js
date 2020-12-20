// this js file contains code that interacts with the weather api & getting data
const api_key = 'Juve6kA4rt21TzXeH6mXqfVF5cRYrCwE';

// make a 1st request to the Location API in AccuWeather's API Reference to get info about a specific city
const getCity = async city => {
    const api_resourceUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    // a question mark at the end of an url signifies the start of query params which are added to that url
    // query params are separated by an ampersand & 
    // here, the 1st query param added is the api key & the 2nd is q
    const query_params = `?apikey=${api_key}&q=${city}`;

    const response = await fetch(api_resourceUrl + query_params);

    const data = await response.json();

    // the returned data consists of an array of different cities based on the match bw them & the one passed to getCity() as an arg
    // the 1st element/city is the closest match to the arg, that's what's returned
    // the crucial part of this returned data is Key (the location key), that's passed to getWeather() as its arg
    return data[0];
};

// make a 2nd request to the Current Conditions API in AccuWeather's API Reference to get the weather info about a specific area
// use Key (the location key), which's returned as a part of the city info by getCity(), to make this request
const getWeather = async locationKey => {
    const api_resourceUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';

    const query_params = `${locationKey}?apikey=${api_key}`;

    const response = await fetch(api_resourceUrl + query_params);

    const data = await response.json();

    // the returned data consists of an array of just 1 object, which contains info regarding the area's weather conditions
    return data[0];
};

// getCity() is called with 'manchester' as its arg & it returns a promise, so a then() is called on it
// inside the 1st then(), getWeather() is called with Key (the location key) as its arg
// getWeather() also returns a promise, so a 2nd then() is called & log the data returned by the 1st then() to the console
// finally, a catch() is called to handle errors if there are any
getCity('manchester').then(data => getWeather(data.Key))
                     .then(data => console.log(data))
                     .catch(error => console.log(error));