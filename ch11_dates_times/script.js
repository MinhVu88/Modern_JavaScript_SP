// DATES & TIMES
const now = new Date(); // create a Date object thru the Date constructor

console.log(now);

console.log(typeof now);

// some Date methods (year, months, dates, weekdays, hours, minutes & seconds)
console.log('getFullYear(): ', now.getFullYear());

// because js is zero-based, so months are counted as elements' indices in an array
// Jan = 0 | Feb = 1 | Mar = 2 | Apr = 3 | May = 4 | June = 5 | July = 6 | Aug = 7 | Sep = 8 | Oct = 9 | Nov = 10 | Dec = 11
console.log('getMonth(): ', now.getMonth());

console.log('-> The correct current month: ', now.getMonth() + 1);

console.log('getDate(): ', now.getDate());

// similar to months, weekdays are treated as elements' indices in an array
// Sun = 0 | Mon = 1 | Tue = 2 | Wed = 3 | Thu = 4 | Fri = 5 | Sat = 6
console.log('getDay(): ', now.getDay());

switch (now.getDay()) {
    case 0:
        console.log('-> Today is Sunday');
    break;
    case 1:
        console.log('-> Today is Monday');
    break;
    case 2:
        console.log('-> Today is Tuesday');
    break;
    case 3:
        console.log('-> Today is Wednesday');
    break;
    case 4:
        console.log('-> Today is Thursday');
    break;
    case 5:
        console.log('-> Today is Friday');
    break;
    case 6:
        console.log('-> Today is Saturday');
    break;
    default:
        console.log('Unknown weekday');
    break;
};

console.log('getHours(): ', now.getHours());

console.log('getMinutes(): ', now.getMinutes());

console.log('getSeconds(): ', now.getSeconds());

// timestamps
console.log('timestamp (represented by the number of milliseconds since 1/1/1970): ', now.getTime());

// date strings
console.log('Date string: ', now.toDateString());

console.log('Time string: ', now.toTimeString());

console.log('Local date & time string: ', now.toLocaleString());

console.log('---------------------------------------------------------------------------------------');

// TIMESTAMPS & COMPARISONS
// create a Date object that's not about the present but some point in the past
const before = new Date('June 2 2019 12:30:59');

console.log(now.getTime(), before);

console.log(now.getTime(), before.getTime());

const timeDiff = now.getTime() - before.getTime();

console.log('The time difference in milliseconds between now & before: ', timeDiff);

// convert the time difference in milliseconds into seconds, minutes, hours, days & months
const seconds = Math.round(timeDiff / 1000);

console.log('The time difference in seconds between now & before: ', seconds);

const mins = Math.round(seconds / 60);

console.log('The time difference in minutes between now & before: ', mins);

const hours = Math.round(mins / 60);

console.log('The time difference in hours between now & before: ', hours);

const days = Math.round(hours / 24);

console.log('The time difference in days between now & before: ', days);

const months = Math.round(days / 30);

console.log('The time difference in months between now & before: ', months);

console.log(`-> My dear son is now ${months} months, ${days} days, ${hours} hours, ${mins} minutes & ${seconds} seconds old`);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// convert timestamps into Date objects
const before_timestamp = 1559453459000;

console.log(new Date(before_timestamp));

console.log('---------------------------------------------------------------------------------------');

// BUILDING A DIGITAL CLOCK
const clock = document.querySelector('.clock');

// the tick() function updates the time on the digital clock every second
const tick = () => {
    const now = new Date();

    const hour = now.getHours();

    const minute = now.getMinutes();

    const second = now.getSeconds();

    //console.log(hour, minute, second);

    const html = `<span>${hour}</span> : <span>${minute}</span> : <span>${second}</span>`;

    clock.innerHTML = html;
};

// tick() is called every 1000 milliseconds/1 second -> a new Date object is also created every new second
setInterval(tick, 1000);

// https://date-fns.org/
const date1 = new Date();

console.log(dateFns.isToday(date1));

const date2 = new Date(1559453459000);

console.log(dateFns.isToday(date2));

// times & dates formatting options
console.log(dateFns.format(new Date(), 'YYYY'));

console.log(dateFns.format(new Date(), 'MMMM'));

console.log(dateFns.format(new Date(), 'MMM'));

console.log(dateFns.format(new Date(), 'dddd'));

console.log(dateFns.format(new Date(), 'Do'));

console.log(dateFns.format(new Date(), 'dddd Do MMMM YYYY'));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// comparing dates using the date-fns library's distanceInWords() method, which returns a distance between 2 dates, formatted in words
// the method takes 3 args -> arg #1: date #1 | arg #2: date #2 | arg #3 (an optional object): options/extra info regarding the formatted date
const date3 = new Date('February 12 1994 12:00:00');

console.log(dateFns.distanceInWords(new Date(), date3));

console.log(dateFns.distanceInWords(new Date(), date3, {addSuffix: true}));