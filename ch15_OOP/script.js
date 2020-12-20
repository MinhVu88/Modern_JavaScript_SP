// CLASS CONSTRUCTORS
class User_0 {
    // the constructor() function constructs the User_0 objects & defines the properties
    constructor() {
        this.user_name = 'Justin Chancellor';
    }
}

/* the 'new' keyword procedures:

    #1: it creates a new empty object {}

    #2: it binds the value of 'this' to that new empty object

    #3: it calls the constructor() function to 'build' the object 
*/
const user0 = new User_0();

const user1 = new User_0();

console.log(user0, user1);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

class User_1 {
    constructor(username) {
        this.user_name = username;
    }
}

const user2 = new User_1('Danny Carey');

const user3 = new User_1('Adam Jones');

console.log(user2, user3);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

class User_2 {
    constructor(username, age) {
        this.user_name = username;

        this.age = age;
    }
}

const user4 = new User_2('Thom Yorke', 42);

const user5 = new User_2('Jonny Greenwood', 45);

console.log(user4, user5);

console.log('---------------------------------------------------------------------------------------');

// CLASS METHODS & METHODS CHAINING
class User_3 {
    constructor(username, age) {
        this.user_name = username;

        this.age = age;
    }

    // define User_3's methods in the form of regular functions using shorthand notation
    // arrow functions aren't recommended as they don't bind any value to 'this' when the methods are called
    // if arrow functions were used, then their 'this' would refer to the global window object, not User_3 objects
    // on the other hand, 'this' inside a regular function refers to User_3 objects
    // class methods are defined outside of the constructor() function & NOT comma-separated
    login() {
        console.log(`${this.user_name} just logged in`);
    }

    logout() {
        console.log(`${this.user_name} just logged out`);
    }
}

const user6 = new User_3('Elliot Alderson', 27);

user6.login();

const user7 = new User_3('Angela Moss', 25);

user7.logout();

console.log(user6, user7);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

class User_4 {
    constructor(username, age) {
        this.user_name = username;

        this.age = age;

        this.subscriber = 0;
    }

    login() {
        console.log(`${this.user_name} just logged in`);

        return this;
    }

    logout() {
        console.log(`${this.user_name} just logged out`);

        return this;
    }

    addSubscriber() {
        this.subscriber++;

        console.log(`${this.user_name} has ${this.subscriber} subscribers`);

        return this;
    }
}

const user8 = new User_4('Darlene Alderson', 23);

// to perform methods chaining on an object, 1 optional way is all of a class's methods return 'this' or the object itself
// that way, when a method's called, it returns a new object of that class which can call another method -> methods chaining
user8.login().addSubscriber().addSubscriber().addSubscriber().logout();

console.log('---------------------------------------------------------------------------------------');

// CLASS INHERITANCE (SUBCLASSES)
// Admin extends User_4, so Admin is a subclass of User_4 -> Admin inherits all of User_4's properties & methods
// if Admin doesn't have constructor(), then it'll automatically look for constructor() in User_4 & call it
class Admin_0 extends User_4 {
    // Admin's own method
    deleteUser(inactive) {
        remainingUsers = users.filter(active => {
            console.log(`${inactive.user_name} has been removed`);

            return active.user_name !== inactive.user_name;
        });
    }
}

const user9 = new Admin_0('Tom Schilling', 38);

console.log(user9);

let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9];

console.log(users);

let remainingUsers = [];

/*
- A randomly generated number between 0 & 8 representing an user's index in users is passed to deleteUser() as an arg

- The index also represents a potentially removed/an inactive user

- Inside deleteUser(), filter() is called on users & fires a callback for each user in it

- Within the callback, true/false is returned when the arg is checked against the users based on user_name

- True: if the arg is identical with an user -> that user is kept & subsequently added to remainingUsers

- False: if the arg is NOT identical with an user -> the arg/inactive user is singled out for deletion & logged to the console
*/
user9.deleteUser(users[Math.floor(Math.random() * 9)]);

console.log(remainingUsers);

console.log('---------------------------------------------------------------------------------------');

// super()
/*
- When Admin_1 has its own constructor(), it no longer seeks & calls User_4's constructor(), that's the job of super()

- Besides using its own properties defined in its own constructor(), 
  in order to use User_4's properties (user_name, age & subscriber),
  Admin_1's constructor() needs to have params such as username & age, 
  just like the params list of User_4's constructor(), along with gender (its own property)

- To utilize username & age, within Admin_1's constructor(), super() is always called 1st & 
  takes username & age as its params (super() = User_4's constructor())
*/  
class Admin_1 extends User_4 {
    constructor(username, age, gender) {
        super(username, age);

        this.gender = gender; // only Admin_1 objects have this property
    }

    deleteUser(inactive) {
        remainingUsers = users.filter(active => {
            console.log(`${inactive.user_name} has been removed`);

            return active.user_name !== inactive.user_name;
        });
    }
}

const user10 = new Admin_1('Till Lindemann', 57, 'male');

console.log(user10, user8);

console.log('---------------------------------------------------------------------------------------');

// CONSTRUCTORS (UNDER THE HOOD)
function User_5(username, age) {
    this.user_name = username; // a property

    this.age = age;

    this.subscriber = 0;

    this.login = function() {console.log(`${this.user_name} just logged in`);}; // a method

    this.logout = function() {console.log(`${this.user_name} just logged out`);};
}

const user11 = new User_5('Oliver Riedel', 48);

console.log(user11);

user11.login();

user11.logout();

console.log('---------------------------------------------------------------------------------------');

// PROTOTYPE MODEL
/* Online references: 

- Ref #1: https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co

- Ref #2: https://javascript.info/prototype-inheritance

- Ref #3: https://www.javascripttutorial.net/javascript-prototypal-inheritance/

- Ref #4: https://blog.bitsrc.io/understanding-javascripts-prototypal-inheritance-354292253bcb

- Ref #6: https://tylermcginnis.com/javascript-inheritance-and-the-prototype-chain/

- Ref #7: https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9
*/
function User_6(username, age) {
    this.user_name = username;

    this.age = age;

    this.subscriber = 0;
}

User_6.prototype.login = function() {
    console.log(`${this.user_name} just logged in`);

    return this;
};

User_6.prototype.logout = function() {
    console.log(`${this.user_name} just logged out`);

    return this;
};

User_6.prototype.addSubscriber = function() {
    this.subscriber++;

    console.log(`${this.user_name} has ${this.subscriber} subscribers`);

    return this;
};

const user12 = new User_6('Richard Kruspe', 52);

console.log(user12);

user12.login().addSubscriber().addSubscriber().addSubscriber().logout();

console.log('---------------------------------------------------------------------------------------');

// PROTOTYPAL INHERITANCE
function Admin_2(username, age, gender) {
    User_6.call(this, username, age);

    this.gender = gender;
}

Admin_2.prototype = Object.create(User_6.prototype);

Admin_2.prototype.deleteUser = function(inactive) {
    remainingUsers = users.filter(active => {
        console.log(`${inactive.user_name} has been removed`);

        return active.user_name !== inactive.user_name;
    });
};

const user13 = new Admin_2('Paul Landers', 55, 'male');

console.log(user12, user13);

console.log(users);

user13.deleteUser(users[Math.floor(Math.random() * 9)]);

console.log(remainingUsers);