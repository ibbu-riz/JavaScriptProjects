// Fill & Filter in Array

// const --> constant

// var --> variable

// let --> scope variable

// var testArray = [2, 5, 8, 9, 3, 7, 6, 1, 4];

// console.log(testArray.fill(0));

// console.log(testArray.fill("h", 2, 6)); 

// 1st param --> what value will be filled up ,
// 2nd param --> what the start position(index) to fill it up,
// 3rd param --> end position which is exclusive(not included)

// console.log(testArray.fill("empty"));

const myNumber = [23, 46, 14, 56, 72, 31, 90, 33];

// const result = myNumber.filter( (num) => (num != 33) );

const result = myNumber.filter( (num) => (num > 33) );


console.log(result);