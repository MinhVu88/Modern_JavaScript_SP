import './css/snackbar.css';

class Snackbar {
    // the constructor takes no params as the snackbar hasn't been created on the page yet
    // instead an html element's created right here (a newly created Snackbar instance = the snackbar element)
    constructor() {
        this.snackbar = document.createElement('div');
    }

    init() {
        // add a class called snackbar to the div tag
        this.snackbar.classList.add('snackbar');

        // add the div tag to the html file's body tag
        document.querySelector('body').appendChild(this.snackbar);
    }

    show(message) {
        this.snackbar.textContent = message;

        this.snackbar.classList.add('active');

        setTimeout(() => {this.snackbar.classList.remove('active');}, 4000);
    }
}

export{Snackbar as default};