// Module exports from class User

// import User from "./06ClassJs";

const User =  require("./06ClassJs.js"); // commomly used

const ibbu = new User("ibbu", "ibbu@dev.com");

// console.log(ibbu.getInfo().email);

// console.log(ibbu.getInfo());

ibbu.enrollCourse("React Bootcamp");
ibbu.enrollCourse("Angular Bootcamp");

// console.log(ibbu.getCourseList());
// console.log(ibbu.getCourseList().length);

let courses = ibbu.getCourseList();

// console.log(`Course Count : ${courses.length}`);

// console.log("Course are :");
// courses.forEach(c => console.log(c));

console.log(`
    Name is : ${ibbu.getInfo().name}
    Email is : ${ibbu.getInfo().email}
    Coursecount is : ${courses.length}
    Courses are : ${courses}
`);