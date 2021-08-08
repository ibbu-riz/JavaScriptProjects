// New keyword

// proto  object in console.. f keyword .. functional object

// prototype .. syntax upperCase

// Another way of defining objects...

// Functional objects

// Whenever constructor is involved.. new keyword is there

var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is : ${this.courseCount}`);
    };
};

// Up there is a prototype or blueprint for every user with this object

// var ibbu = User("ibbu", 2); // without new keyword

// Without new keyword, this points to window object,
// so that it is undefined

// var ibbu = new User("ibbu", 2);

// // console.log(ibbu);

// var jack = new User("jack", 4);

// New keyword,
//creates a new copy of the user object,
// moves the this in window(global) object to user object

// console.log(jack);

// Duplicate one object multiple times
// Unique instances

// Proto in js

User.prototype.getFirstName = function () {
    console.log(`Your firstname is : ${this.firstName}`);
};

// var ibbu = new User("ibbu", 2);
// ibbu.getCourseCount();
// ibbu.getFirstName();
// // console.log(ibbu.firstName);

// var jack = new User("jack", 4);
// jack.getCourseCount();
// jack.getFirstName();

// Object chain in js

var ibbu = new User("ibbu", 2);
ibbu.getCourseCount();

// if (ibbu.hasOwnProperty("firstNamee")){
//     ibbu.getFirstName();
// }

if (ibbu.hasOwnProperty("firstName")){
    ibbu.getFirstName();
}
