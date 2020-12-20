const addTodoForm = document.querySelector('.add'); // a reference to the add-todo form

const todoList_ul = document.querySelector('.todos'); // a reference to the ul tags in index.html

// ADDING TODOS
// for the program's reusability, this function's created & can be called anywhere, anytime to add any latest item to the list
const generateTemplate = todo => {
    // instead of using a DOM method like createElement() (no problem with that), it's easier to use a template string
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                      <span>${todo}</span>
                      <i class="far fa-trash-alt delete"></i>
                  </li>`;
    
    todoList_ul.innerHTML += html; // inject/append a new li/item to the ul/todo list
};

addTodoForm.addEventListener('submit', e => {
    e.preventDefault();

    // addTodo.add.value returns the actual user input as a string
    // add is 1 of the form's classes, not a function/method
    // the string method, trim(), removes the string's leading & trailing white spaces, if there are any
    const todo = addTodoForm.add.value.trim();

    console.log(todo);

    // if user types nothing into the form & then presses enter, nothing gets added to the form, so length must be over 0
    // call the reset() method on the form helps clear the form after user pressed enter
    if(todo.length) {
        generateTemplate(todo);

        addTodoForm.reset();
    }
});

// DELETING TODOS
// without event delegation: query the DOM for all the trashcan icons & attach event handlers to those but there are 2 problems with that:
// 1stly, if there are many todos, then there are many event handlers attached to them -> not good for the program's performance
// 2ndly, everytime a new todo's added to the list, then an event handler has to be attached manually to its trashcan, so it can be removed  
/* 2 reasons for using event delegation for removing a todo:

1/ Less code to write & better program performance: The ul element is the parent of the li elements/todo items, 
   so instead of manually attaching every event handler to every todo's trashcan, that can be done once for the ul, not the individual items.

2/ For a new todo: 
    - When a click event occurs within the ul, the callback fires up & checks if the target element that was clicked was a trashcan.
      If it was, then the li tag that contains that trashcan is deleted. If it wasn't, then nothing happens.
    
    - So when a new todo is added to the list, if a click event on the trashcan happened, it'd be automatically delegated to that new todo from the ul
*/
todoList_ul.addEventListener('click', e => {
    // target the trashcan icon's delete class & then remove its parent element, which is the li
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove(); 
    }
});

// SEARCHING & FILTERING TODOS
// for the program's reusability, this function's created & can be called anywhere, anytime to filter the todos list
const filterTodos = user_input => {
    console.log(user_input);

    console.log(todoList_ul.children); // return an HTMLCollection, on which array methods can't be used

    console.log(Array.from(todoList_ul.children)); // convert the HTMLCollection to an array

    /*
    
    */
    Array.from(todoList_ul.children)
         .filter(todo => {
             console.log(todo.textContent);

             return !todo.textContent.toLowerCase().includes(user_input);
         })
         .forEach(todo => {
             todo.classList.add('filtered');

             todo.classList.remove('d-flex');
        });
    
    Array.from(todoList_ul.children)
         .filter(todo => todo.textContent.toLowerCase().includes(user_input))
         .forEach(todo => {
             todo.classList.remove('filtered');

             todo.classList.add('d-flex');
        });
};

// use the keyup event in the search todos form: a reference to the form's input field in the header of index.html
const searchTodosForm = document.querySelector('.search input');

searchTodosForm.addEventListener('keyup', () => {
    const userInput = searchTodosForm.value.trim().toLowerCase();
    
    filterTodos(userInput); // this function's called whenever user types something
});