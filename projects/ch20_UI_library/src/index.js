import Tooltip from './ui/tooltip.js';
import Dropdown from './ui/dropdown.js';
import Tabs from './ui/tab.js';
import Snackbar from './ui/snackbar.js';

// create a Tooltip instance & pass it the span tag's class attribute in index.html
const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init();

// create Dropdown instances
// get references to all the dropdown classes in index.hlml
const dropdowns_nodeList = document.querySelectorAll('.dropdown'); 

// loop thru the node list & pass each dropdown to the Dropdown instances inside this callback
dropdowns_nodeList.forEach(dropdown_class => {
    const dropdown = new Dropdown(dropdown_class);

    dropdown.init();
});

// create Tab instances
const tabs = new Tabs(document.querySelector('.tabs'));

tabs.init();

// create the Snackbar instance
const snackbar = new Snackbar();

snackbar.init();

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    snackbar.show('ya talkin\' to me? ya talkin\' to me? Well, i\'m the only one here. Who the hell are you talkin\' to?');
});