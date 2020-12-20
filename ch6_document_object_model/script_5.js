const button = document.querySelector('button');

const popup = document.querySelector('.popup-wrapper');

const close = document.querySelector('.popup-close');

// in style_2.css, display is none, which means the popup isn't present to begin with
// when the button is clicked, the callback fires up & that turns display from none to block
// thus the popup appears
button.addEventListener('click', () => popup.style.display = 'block');

// when the 'X' is clicked, the popup closes
close.addEventListener('click', () => popup.style.display = 'none');

// when the click isn't on the popup itself but is somewhere on the faded background/popup-wrapper
// the popup also closes
popup.addEventListener('click', () => popup.style.display = 'none');