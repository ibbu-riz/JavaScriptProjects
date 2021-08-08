// Lexical scoping in js

// Closure

// init means initialization

// fn programming

function init() {
    var firstName = "ibbu";
    function sayFirstName() {
        console.log(firstName);
    }
    sayFirstName();
}

// Here init() points to global context(window),
// firstName, sayFirstName points in init() context,
// sayFirstName() call is made in init() context.
// once the fn call is over, then init() context will be cleared

init();
// console.log(firstName);

// Here firstName is cleared and scope is gone

// Closure

// redex...

// var nn = init();

// var name = fn()