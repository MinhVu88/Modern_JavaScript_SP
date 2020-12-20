// DOM queries
const chatList = document.querySelector('.chat-list');

const newChatForm = document.querySelector('.new-chat');

const newNameForm = document.querySelector('.new-name');

const updateNotice = document.querySelector('.update-notice');

const rooms = document.querySelector('.chat-rooms');

// check local storage for the key 'username' (using a ternary operator)
// ternary operator -> condition ? value 1 : value 2 (true: value 1 | false: value 2)
const localStorage_username = localStorage.username ? localStorage.username : 'anon';

// class instances
const processor = new chatroom(localStorage_username, 'ninja');

const ui = new chatUI(chatList);

// add a new chat/message
newChatForm.addEventListener('submit', e => {
    e.preventDefault();

    // message is from '<input type="text" id="message" class="form-control" required>'
    const message = newChatForm.message.value.trim();
    
    // when user types something in the Your message form & submits it, the form's cleared up by using the reset() method
    processor.addChatDocs(message).then(() => newChatForm.reset()).catch(error => console.log(error));
});

// update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault();

    // name is from '<input type="text" id="name" class="form-control" required>'
    const newName = newNameForm.name.value;

    newNameForm.reset() // after user submitting their new username, the Update name form's cleared up

    processor.updateUsername(newName);

    updateNotice.innerText = `Your username was updated to ${newName}`;

    // after a few seconds, the update notice disappears
    setTimeout(() => updateNotice.innerText = '', 3000);
});

// update the chatrooms (using event delegation)
rooms.addEventListener('click', e => {
    // check if the event target is a button
    if(e.target.tagName === 'BUTTON') {
        // clear the chat list of the current room when user switches between rooms
        ui.clear();

        // update the chatroom class's chat_room property & unsubscribe from listening to changes in the current room
        processor.updateChatroom(e.target.getAttribute('id'));

        // set up a real-time listener for changes in the new room
        processor.getRealTimeChatData(data => ui.render(data));  
    }
});

// get the real-time chat data & render it to the ui
processor.getRealTimeChatData(data => ui.render(data));