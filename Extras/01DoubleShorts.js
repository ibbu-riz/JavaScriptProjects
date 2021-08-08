// Double shorts in js

var name = "ibbu";

var user = "";

if (name) {
    console.log("I am block 1");
}

if (!!user) { // !! user makes truth values -> true, and falsy values -> false
    console.log("I am block 1");
}