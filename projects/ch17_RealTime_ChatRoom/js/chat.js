class chatroom {
    constructor(username, room) {
        this.chat_room = room;
        this.user_name = username;
        this.chats_collection = db.collection('chats');
        this.unsubscribe;
    }

    async addChatDocs(message) {
        // add new chat docs to the chats collection (a db collection's doc = a js object)
        const now = new Date(); // for when user submits a chat

        // format a chat doc object
        const chat_doc = {
            message,
            username: this.user_name,
            chatroom: this.chat_room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };

        // save the chat doc to the chats collection
        const response = await this.chats_collection.add(chat_doc);

        return this;
    }

    /*
      - This method contains the unsubscribe function & when it's called from within updateChatroom(), which's called somewhere in app.js,
        it makes the app unsubscribe from listening to any real-time changes in the current chat doc
      
      - At the same time getRealTimeChatData() also sets up a real-time listener for changes in the new doc whenever they're added to the db
      
      - For more info regarding the unsubscribe var/function, refer to ch16_databases 
      
      - The collection's where() method allows us to get docs from a certain collection where a certain condition is true

      - It takes 3 args:
                        + arg #1: the document's field we want to access
                        + arg #2: '=='
                        + arg #3: the chatroom class's property to which the field corresponds
    */
    getRealTimeChatData(callback) {
        this.unsubscribe = this.chats_collection.where('chatroom', '==', this.chat_room)
                                                .orderBy('created_at')
                                                .onSnapshot(snapshot => {
                                                    snapshot.docChanges().forEach(change => {
                                                        if(change.type === 'added') {
                                                            callback(change.doc.data());
                                                        }
                                                    });
                                                });
    }

    // update username
    updateUsername(username) {
        this.user_name = username;

        localStorage.setItem('username', username); // store the new username in local storage
    }
 
    /* 
      - The updateChatroom() method merely updates the class's chat_room property & 
        invokes the unsubscribe() func if the unsubscribe property holds any value

      - When updateChatroom() is invoked somewhere in app.js, it makes the app temporarily stop listening to changes in the current doc
        until pieces of updated data are added to the new doc
    
      - Besides, the method doesn't listen to any real-time changes occurred in the new doc
      
      - In other words, it doesn't set up any real-time listener for an updated room

      - To update room successfully, getRealTimeChatData() must be called after updateChatroom()
        to receive the updated data & then sets up a real-time listener for changes in the new room 
    */ 
    updateChatroom(room) {
        this.chat_room = room;

        console.log('room updated');
        
        if(this.unsubscribe) {this.unsubscribe();} 
    }
}

// const room = new chatroom('Maynard Keenan', 'music');

// room.addChatDocs('hi everyone').then(() => console.log('chat doc added')).catch(error => console.log(error));

// room.getRealTimeChatData(data => console.log(data));

// setTimeout() emulates the approximate length of time the user has to wait when changing/updating chatroom & name
// setTimeout(() => {
//     room.updateChatroom('ninja');

//     room.updateUsername('Elliot Alderson');

//     room.getRealTimeChatData(data => console.log(data));

//     room.addChatDocs('bonsoir Elliot');
// }, 3000);