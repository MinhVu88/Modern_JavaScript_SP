// create each class for each component (this's the tooltip component)
import './css/tooltip.css';

class Tooltip {
    constructor(span_tag) {
        this.tooltip_class = span_tag; // the span tag in index.html

        this.message = span_tag.getAttribute('data-message'); // this's what's shown inside the tooltip
    }

    // the init() method's called to initialize the component 
    init() {
        const tip = document.createElement('div');

        tip.classList.add('tip');

        tip.textContent = this.message;

        this.tooltip_class.appendChild(tip); // insert the message inside the span tag in index.html

        // the mouseenter event fires just ONCE when the mouse enters/hovers over the element 
        this.tooltip_class.addEventListener('mouseenter', () => {tip.classList.add('active');});

        // & stops firing when the mouse moves away from the span tag
        this.tooltip_class.addEventListener('mouseleave', () => {tip.classList.remove('active')});
    }
}

export {Tooltip as default};