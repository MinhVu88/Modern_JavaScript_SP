// this js file deals with DOM manipulations
const form = document.querySelector('form');

const card = document.querySelector('.card');

const details = document.querySelector('.details');

const time = document.querySelector('img.time');

const icon = document.querySelector('.icon img');

const updateUI = data => {
    console.log(data);

    //const city = data.city_data;

    //const weather = data.weather_data;

    // destructuring in js allows us to take an object's properties 
    // & store them in vars whose names are the same as those properties
    const {city_data, weather_data} = data;

    details.innerHTML = `<h5 class="my-3">${city_data.EnglishName}</h5>

                        <div class="my-3">${weather_data.WeatherText}</div>

                        <div class="display-4 my-4">
                            <span>${weather_data.Temperature.Metric.Value}</span>
                            
                            <span>&deg;C</span>
                        </div>`;
    
    // when the page 1st loads or gets refreshed, the user should see only the h1 & the form (due to the d-none class)
    // when user types a city name in the form & presses enter, d-none is removed, then city & weather details appear
    if(card.classList.contains('d-none')) {card.classList.remove('d-none');}

    // update the night/day images & the weather icons
    /*
    let day_night_img = null;

    if(weather_data.IsDayTime) {
        day_night_img = 'img/day.svg';
    } else {
        day_night_img = 'img/night.svg';
    }
    */

    // the ternary operator
    let day_night_img = weather_data.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    time.setAttribute('src', day_night_img);

    const icon_img = `img/icons/${weather_data.WeatherIcon}.svg`;

    icon.setAttribute('src', icon_img);
};

const updateCity = async city => {
    // despite getCity() & getWeather() being defined in forecast.js, they can be called here because
    // in index.html, the link to forecast.js comes before app.js
    const city_data = await getCity(city);

    const weather_data = await getWeather(city_data.Key);

    // each time updateCity() is called, it returns a new object that has 2 properties (city_data & weather_data)
    // this object's properties have names & values that look identical, so object shorthand notation can be used here
    // object shorthand notation allows us to use either the name or the value
    return {city_data, weather_data};
};

form.addEventListener('submit', e => {
    e.preventDefault();

    // get the user input
    const city = form.city.value.trim();

    form.reset(); // the form resets when user enters/submits a city name

    // update the ui with the city info (pic, name & weather)
    updateCity(city).then(data => updateUI(data)).catch(error => console.log(error));
});