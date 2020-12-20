import './css/dropdown.css';

class Dropdown {
    constructor(dropdown_class) {
        this.trigger = dropdown_class.querySelector('.trigger');

        this.content = dropdown_class.querySelector('.content');
    }

    // the init() method's called to show/hide the content when trigger's clicked
    init() {
        this.trigger.addEventListener('click', () => {
            // if trigger's clicked & it doesn't have the 'active' class, it's then given the class
            // if trigger's clicked & it already has the 'active' class, its active class's disabled
            // the same goes for content  
            this.trigger.classList.toggle('active');

            this.content.classList.toggle('active');
        });
    }
}

export {Dropdown as default};