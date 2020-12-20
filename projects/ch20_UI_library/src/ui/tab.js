import './css/tab.css';

class Tabs {
    constructor(tabs_class) {
        this.tabs_class = tabs_class;

        this.triggers_nodeList = tabs_class.querySelectorAll('.trigger');
    }

    init() {
        // loop thru the tabs, add an event handler to each tab & fire a callback for each one when a tab's clicked
        // the callback toggles the active & content classes for the tabs
        // Ex: the clicked tab gets activated & its content shown, the others don't
        this.triggers_nodeList.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggleActive(e);

                this.toggleContent(e);
            });
        });
    }

    toggleActive(e) {
        // remove the current active classes for the tabs, except the clicked one
        this.triggers_nodeList.forEach(tab => tab.classList.remove('active'));

        // add the active class to the clicked tab
        e.target.classList.add('active');
    }

    toggleContent(e) {
        // remove the current active classes for the tabs' contents, except the clicked one
        this.tabs_class.querySelectorAll('.content').forEach(item => item.classList.remove('active'));

        // add the active class to the content that's linked to the clicked tab
        // 1st, get the reference to the clicked tab's id by targeting the data-target attribute whose value contains the id 
        const id = e.target.getAttribute('data-target');

        // 2nd, target the content class that has the specified id above
        const content = this.tabs_class.querySelector(id);

        // 3rd, add the active class to the content with the specified id
        content.classList.add('active');
    }
}

export {Tabs as default};