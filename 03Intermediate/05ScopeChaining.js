// Scope Chaining

var name = "Ibbu";

console.log("Line number 3", name);

function sayName() {
    // var name = "Mr. H"
    console.log("Line number 7", name);
    sayNameTwo();

    function sayNameTwo() {
        // var name = "Mr. I"
        console.log("Line number 11", name);
    }
}

// {
//     // Scope 
// }

// function abc() {
//     // Scope
// }




sayName();

