console.log('dom.js');

const body = document.querySelector('body');

/*export*/ const styleBody = () => body.style.background = 'peachpuff';

/*export*/ const addTitle = text => {
    const title = document.createElement('h1');

    title.textContent = text;

    body.appendChild(title);
};

// styleBody();

// addTitle('Hello friend, maybe i should give you a name');

/*export*/ const email = 'fsociety@redwheelbarrow.dk';

export{styleBody, addTitle, email};