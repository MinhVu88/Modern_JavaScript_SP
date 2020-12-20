const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');

const p1 = document.querySelector('p');

form.addEventListener('submit', e => {
    e.preventDefault();

    let user_score = 0;

    const user_answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // CHECK USER ANSWERS
    user_answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            user_score += 25; // 1 correct answer = 25 %
        }
    });

    console.log(user_score);

    // SHOW RESULT ON THE PAGE

    /*
    // my solution to the challenge
    result.classList.remove('d-none');

    result.classList.add('d-block');

    p1.innerHTML = `<p>You're <span class="text-primary display-4 p-3">${user_score}%</span> ninja</p>`;
    */

    // Shaun's solution to the challenge (somewhat better than mine)
    // defining another querySelector() on result helps us seek something specific inside the div that has the result class
    // once we find that thing, we can specify it in this querySelector()
    // Ex: the span element nested within the p element inside the container & lead classes, all of which are inside result
    window.scrollTo(0, 0); // window can be omitted as its presence is inferred

    //result.querySelector('span').textContent = `${user_score}%`;

    result.classList.remove('d-none');

    // SET INTERVALS & ANIMATE THE SCORE
    let counter = 0;

    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${counter}%`;

        if (counter === user_score) {
            clearInterval(timer);
        } else {
            counter++;
        }
    }, 10);
});

// THE WINDOW OBJECT (the global object/the mother of all objects, methods & properties in front-end js)
// console, document, alert & setTimeout() are all stored on window
console.log('fsociety');

window.console.log('fsociety');

console.log(document.querySelector('.intro'));

console.log(window.document.querySelector('.intro'));

//alert('hi');

//window.alert('hi');

//setTimeout(() => {alert('10 seconds after the page loads, this popup will appear')}, 10000);

// the method that gets user up to the page's top after clicking submit is scrollTo(x-coordinate value, y-coordinate value)

//setInterval(() => {console.log('this callback function is invoked every 5 seconds');}, 5000);

// stop an interval
let counter = 0;

const timer = setInterval(() => {
    console.log('Bonsoir Elliot');

    counter++;

    if (counter === 5) {
        clearInterval(timer);
    }
}, 5000);