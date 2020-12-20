// THROWING & CATCHING ERRORS
const getJSON = async () => {
    const response = await fetch('json/moviess.json');

    // use the throw keyword to throw a new Error object that carries an error message if the response's status isn't 200
    // if the error is thrown here, the remaining code won't run & the promise returned by getJSON() is rejected
    // the error is then caught by the catch() method defined after then()
    if(response.status !== 200) {
        throw new Error('unable to fetch the data');
    }

    const data = response.json();

    return data;
};

getJSON().then(data => console.log(data)).catch(error => console.log('Error: ', error.message));