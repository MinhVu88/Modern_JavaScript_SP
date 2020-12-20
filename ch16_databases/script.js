const recipes_list = document.querySelector('ul');

const input_field = document.querySelector('form');

const unsub_btn = document.querySelector('button');

// this function creates a html template for each recipe/doc to be added to the dom
const showAddedData = (recipe, recipe_id) => {
    let title = recipe.title;

    let date = recipe.created_at.toDate();

    // add a html5 custom data attribute (data-*) called data-id, whose value is recipe_id
    let html = `<li data-doc_id=${recipe_id}>
                    <div>${title}</div>
                    <div>${date}</div>
                    <button class="btn btn-danger btn-sm my-2">Delete</button>
                </li>`;

    console.log(html);

    recipes_list.innerHTML += html;
};

const showRemovedData = recipe_id => {
    const recipes = document.querySelectorAll('li');

    recipes.forEach(recipe => {
        if(recipe.getAttribute('data-doc_id') === recipe_id) {
            recipe.remove();
        }
    });
};

/*
// get a reference to the recipes collection to retrieve the docs it contains by using the collection's get() method
// get() is an 1-time retrieval, meaning it doesn't reflect any changes that might occur in the db 
// db.collection('recipes').get() is an async task, which returns a promise, so a then() is called on it
// the callback within then() fires when the data/snapshot is successfully retrieved 
db.collection('recipes').get().then(snapshot => {
    console.log(snapshot); // a snapshot represents the state of the recipes collection at that moment in time

    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

    console.log(snapshot.docs); // an array of docs in recipes

    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

    console.log(snapshot.docs[0]); // access the 1st doc

    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

    console.log(snapshot.docs[0].data()); // get the 1st doc's data

    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

    // cycle thru the docs array printing out each doc's data & unique id
    snapshot.docs.forEach(doc => console.log(doc.data(), doc.id));
    
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    
    // cycle thru the docs array & output each recipe title to the browser by calling showRecipeData()
    snapshot.docs.forEach(doc => showRecipeData(doc.data(), doc.id)); 
}).catch(error => console.log(error));
*/

/*
  - The collection's onSnapshot() method is called to retrieve the recipes collection's docs in real time 
  
  - Also, onSnapshot() when called returns another function (or the unsubscribe function) 
    that can terminate this real-time listener

  - This function is usually assigned to a var which can be called somewhere else to 
    make the program stop listening to changes occurred in the database

  - Online references:

    https://firebase.google.com/docs/reference/js/firebase.firestore.CollectionReference.html#onsnapshot

    https://firebase.google.com/docs/firestore/query-data/listen#detach_a_listener

    https://stackoverflow.com/questions/53157997/firestore-unsubscribe-to-updates

    https://stackoverflow.com/questions/46642652/how-to-remove-listener-for-documentsnapshot-events-google-cloud-firestore
*/
const unsubscribe = db.collection('recipes').onSnapshot(snapshot => {
    /*
    console.log(snapshot);

    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

    console.log(snapshot.docChanges()); // return an array of changes occurred in a doc

    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    */
    // get the type & doc properties of each change in the doc (added/removed) & use that data to update the UI
    snapshot.docChanges().forEach(change => {
        const type = change.type;
        
        const doc = change.doc;
        
        if(type === 'added') {
            showAddedData(doc.data(), doc.id);
        } else if(type === 'removed') {
            showRemovedData(doc.id);
        }
    });
});

// add new recipes/docs to the collection by using the add() method
input_field.addEventListener('submit', e => {
    e.preventDefault();

    // js objects === collection docs (both contain key/field-value pairs in them) 
    const recipe_doc = {
        title: input_field.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(new Date()) // create a firestore's timestamp object
    };

    db.collection('recipes').add(recipe_doc).then(() => {
        console.log(recipe_doc.title, 'has been added to the recipes collection');
    }).catch(error => console.log(error));
});

// remove a doc from the collection by targeting its unique id & by utilizing event delegation
recipes_list.addEventListener('click', e => {
    console.log(e);

    if(e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-doc_id'); // the li elements (parents) <-> the buttons (children)

        // to target a single doc in the collection, use the doc() method with an unique doc id passed to it as an arg  
        // & the delete() method afterwards to remove that specific doc
        // db.collection('recipes').doc(id).delete() -> an async task -> a returned promise -> then() -> catch()
        db.collection('recipes').doc(id).delete()
                                        .then(() => console.log('Recipe id:', id, '(deleted)'))
                                        .catch(error => console.log(error));
    } 
});

// unsubscribe from changes in the collection
unsub_btn.addEventListener('click', () => {
    unsubscribe();

    console.log('unsubscribed from changes in the recipes collection');
});