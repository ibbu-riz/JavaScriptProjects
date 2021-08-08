// Closure in js

// Way of thinking....

// function init() {
//     var firstName = "ibbu";
//     console.log("I am init");
//     function sayFirstName() {
//         console.log(firstName);
//     }
//     return sayFirstName; // reference of sayFirstName
//     // init() will not cleared and not going away
// }

// var value = init();

// // console.log(value);

// value(); // this is a closure...

// init()();

// this is closure .. fn programming

function doAddition(x) {
    return function (y) {
        return x + y;
    };
}

var add5 = doAddition(4);

console.log(add5(5));


// doAddition(5)(5);

// This is closure, memory works in js

// Even one reference, the fn  will not go away

console.log(doAddition(5)(5));

// It is common in redex js

// doAddition()()() // curring