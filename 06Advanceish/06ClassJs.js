// Classes and objects in js

// Classes and module exports in js

//  classes are blueprints

// export class User {

class User {
    // #name = ""; // optional
    // constructor can be given
    // otherwise class will create one
    constructor(name, email) {
        // here this.name --> User 's name...
        // and name is a parameter which is passed on
        this.name = name;
        this.email = email;
    }

    #courseList = []; // # is private variable 

    // here is it getInfo is  a fn or method
    getInfo() {
        return { name: this.name, email: this.email };
    }
    enrollCourse(name) {
        this.#courseList.push(name);
    }
    getCourseList(){
        return this.#courseList;
    }

    //  here static property --> login() will not accessible by child class 
    //Sub-admin

    // static login () {
    //     return "You are logged in";
    // }
    
    login () {
        return "You are logged in";
    }

    // getters -> return something ..to get (usually no params)

    // setters -> set something ... by giving paras to that method
}

// Inheritance in js

class SubAdmin extends User{
    // here super property
    // gets the base class property
    constructor(name, email) {
        super(name, email);
    }
    getAdminInfo(){
        return "I am sub-admin";
    }

    // override the same fn login()
    login(){
        return "login for admin only";
        // super
    }
}

// Inheritance in js

const kevin = new SubAdmin("kevin",  "kevin@dev.com");

console.log(kevin.getAdminInfo());

console.log(kevin.login());

console.log(kevin.getInfo());

// let ibbu = new User("ibbu", "ibbu@dev.com")

// Here we are declaring class in one file
// and using it in another class


module.exports = User;

// Private properties
// Getters and setters in js

const jack = new User("jack", "jack@pearson.com");

// console.log(jack.getInfo());

jack.enrollCourse("Angular BootCamp");

// Both are same

// console.log(jack.getCourseList());

// console.log(jack.courseList);

// --------

// this is also same

// console.log(jack.name);

// console.log(jack.getInfo().name);


// Private variables, getters and setters

// creating private variables by adding # to the front

//  # courseList



