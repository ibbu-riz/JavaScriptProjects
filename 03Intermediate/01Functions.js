function sayHello(name) {
    console.log("Hello there, Ibbu");
    // console.log("Hello there, ", name); -> old style
    console.log(`Hello there, ${name}. How are you?`);
}

// sayHello("ibbu"); // calling the function
// // sayHello; // refering the functiom

// sayHello("riz");


function vanakam() {
    return "Hello from TamilNadu";
}

// vanakam();

var greetings = vanakam();

console.log(greetings);
console.log(vanakam());