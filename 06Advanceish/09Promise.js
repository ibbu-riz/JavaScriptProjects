// Promise async and await in js

// before in  08Async.js

// first uno(), dos() should be load up

// then my setTimeOut...

// then tres()...

const uno = () => {
    return "I am one";
};

// async should be used when there is a connection  with db  via aws...
// otherwise  we get into trouble...

// here comes promise and async await..

// Promises can be of two states...

// fullfilled

// not fullfilled

// Promise is  promising that i bring up things , wait for a minute...

// otherwise it says i got no data for you...

// const dos = async() => {
// const dos = () => {
//     setTimeout(() => {
//         return "I am two";
//     }, 3000);
// };

// those, then and catch...scenerio..

const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am two");
            // axios....
            // reject("I am two");
            // here reject means rising up an error....
            // concern about that...
        }, 3000);
    });
};

const tres = () => {
    return "I am three";
};

// const callMe = () => {
const callMe = async() => { // async is used for promise
    let valOne = uno();
    console.log(valOne);

    //  let valTwo =  dos();
    let valTwo =  await dos(); // here awit says this is important...
    // do this work and execute other things...
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);

}

callMe();