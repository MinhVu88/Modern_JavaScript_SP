class chatUI {
    constructor(list) {
        this.chat_list = list;
    }

    // render the chat data/list to the dom/browser
    render(data) {
        const when = dateFns.distanceInWordsToNow(data.created_at.toDate(), {addSuffix: true});

        const html = `
                     <li class='list-group-item'>
                        <span class='username'>${data.username}: </span>
                        <span class='message'>${data.message}</span>
                        <div class='time'>${when}</div>
                     </li>
        `;

        this.chat_list.innerHTML += html;
    }

    // clear the chat list/data of the current room when user switches between rooms
    clear() {this.chat_list.innerHTML = '';}
}