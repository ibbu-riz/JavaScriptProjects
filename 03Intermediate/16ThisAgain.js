// Confusion part of this keyword

// For all regular function calls, this points to window(global) object

console.log(this);

var user = {
    firstName: "Ibbu",
    courseCount: 4,
    getCourseCount: function () {
        console.log("LINE 11", this);
        //Reg fn
        function sayHello() {
            console.log("Hello");
            // this is inside a reg fn call
            console.log("LINE 14", this); 
        }
        sayHello(); // Reg fn call
    }
};

// here getCourseCount() fn is called via object user,
// so it is not regular fn call
user.getCourseCount(); 

// Down here is an example for reg fn call

// function sayHello() {
//     console.log("Hello");
// }

// sayHello();