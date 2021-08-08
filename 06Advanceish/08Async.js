// Event loop

// Will js wait

// Async in js

// Load things simulteously...



const uno = () => {
    console.log("I am one");
}

const dos = () => {
    setTimeout(() => {
        console.log("Woohooo");
    }, 3000);

    // setTimeout can be...
    // loading up the image...
    // loading the info from db...
    // checking from  the web api...

    // Some db should be load first, and 
    // then rest of the things should be come up..

    // For that...see 09Promise.js
    console.log("I am two");
}

const tres = () => {
    console.log("I am three");
}

uno();

dos();

// Is there anybody to execute...

// Because i am following event loop

// here setTimeout is a  event loop

tres();

// In backend js

// do things as sync... & async....

