tipper("95");
// Global context --> Window object in the browser

// Execution context --> after global context --> it executes any function or any line and goes away

/* Execution context

Variable Object

Scope Chain

this

*/

/* In global context
functions definitions are scanned and made available
variable declarations are scanned and made undefined  */

// var num = 2;

// function sayMe() {
//     console.log("Say Me");
// }

// sayMe();
tipper("85");

function tipper(a) {
    // var bill = a;
    var bill = parseInt(a);
    console.log(bill + 5);
}

// tipper(5);
tipper("5");
// tipper("a");

// bigTipper("200");
var bigTipper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 15);
}
bigTipper("200");

// var are scanned and made undefined

console.log(name); // undefined
var name = "ibbu";
// console.log(name);

// var are scanned and made undefined

function sayName() {
    var name = "Mr. K";
    console.log(name);  // this function is in new context
}

sayName(); // Mr.K

console.log(name); // name --> ibbu

// Variable Object