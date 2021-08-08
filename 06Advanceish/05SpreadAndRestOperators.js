// Spread and Rest Operators in js

// ...args

// ...ibbu

// var returnedValue = Math.max(2, 3, 6, 8, 9, 7);

// console.log(returnedValue);

// var myObj = {};

// Object.assign(myObj, {a: 1, b: 2, c: 3}, {z: 9, y: 8, x: 7});

// console.log(myObj);

function sumOne(a, b) {
    return a + b;
}

// var myA = [5, 4];

// console.log(sumOne(5, 4));


// console.log(sumOne(5, 4, 1));

// console.log(sumOne(myA));


// console.log(sumOne(...myA)); // Spread operator

// It split the array or any into induvidual values (...)

// any number of values to sum up

// function sumTwo(...args) {  // here ...args is rest opeartor
//     console.log(args);
//     //array in fn
//     let sum = 0;
//     for (const arg of args) {
//         sum += arg;
//     }
//     return sum;
// }

// console.log(sumTwo(2, 12, 3, 12));

// console.log(sumTwo(4, 2, 1));

// spread(...myA) --> array or any to individual

// rest(...args) --> individual to array or any

function sumTwo(a, b, ...args) {  // here ...args is rest opeartor
    // console.log(args);
    let multi = a * b;
    //array in fn
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return [multi ,sum];
}

// console.log(sumTwo(2, 12, 3, 12));

// console.log(sumTwo(4, 2, 1));

