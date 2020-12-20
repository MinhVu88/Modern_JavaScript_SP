// COPY EVENT
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => console.log('OI! my content is copyright'));

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// MOUSEMOVE EVENT
const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
    //console.log(e);

    // offsetX: the cursor's X coordinates in pixels from the top left of the container/box 
    // the more the cursor moves to the top right, the larger X's value gets 
    // offsetY: the cursor's Y coordinates in pixels from the top right of the container/box
    // the further down the box's bottom right the cursor moves, the larger Y's value gets
    /*
                  X (0) |--------------------| Y (0)
                        |                    |
                        |                    |
                        |                    |
                        |                    |
                        |                    |
                        |--------------------|
    */
    console.log(e.offsetX, e.offsetY);

    // output the box's X & Y coordinate values to the browser when the cursor moves around within the box
    box.textContent = `X-coordinates: ${e.offsetX} | Y-coordinates: ${e.offsetY}`;
});

// WHEEL EVENT
// the wheel event object's pageX & pageY are similar to offsetX & offsetY 
// but pageX & pageY are relative to the whole page, not just to a box or a container
// pageX is relative to the left of the document, pageY is to the top 
document.addEventListener('wheel', e => {
    //console.log(e);

    console.log(e.pageX, e.pageY);
});