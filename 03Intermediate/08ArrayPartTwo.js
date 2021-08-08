// Callback and arrow function in array

// function isEven(element) {
//     if (element % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// console.log(isEven(3));

// function isEven(element) {
//     return element % 2 === 0;
// }

// var isEven = function(element) {
//     return element % 2 === 0;
// }

// var isEven = (element) => {
//     return element % 2 === 0;
//     // element % 2 === 0;
// }

// var isEven = (element) => element % 2 === 0;
    
// console.log(isEven(75));

// console.log(isEven(92));


// var result = [2, 4, 6, 8].every(isEven); // Here isEven is a variable so we are refering as a reference
// console.log(result);

// var result = [2, 3, 6, 8].every(isEven);
// console.log(result);


// var result = [2, 4, 6, 8].every((e) => {
//     return e % 2 === 0;
// });

// console.log(result);

// Callback function --> () => {} , No curly braces {} means No return keyword

// var result = [2, 3, 6, 8].every((e) => e % 2 === 0);

var result = [2, 4, 6, 8].every((e) => (e % 2 === 0));

console.log(result);