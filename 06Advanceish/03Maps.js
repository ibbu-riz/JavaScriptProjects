// Maps in js

// New in es 6..

// var obj = new Object

var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "Dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);

// for (let key of myMap.keys()) {
//     console.log(`Key is ${key}`);
// }

// for (let value of myMap.values()) {
//     console.log(`Value is ${value}`);
// }


// for (let [key, value] of myMap) {
//     console.log(`Key is : ${key} and Value is : ${value}`);
// }

// Up there for of is used to retrieve 
// key, value in map

// But in foreach key is considered as index, gives
// values as output

// myMap.forEach( (key) => (console.log(`${key}`)) );

// myMap.forEach( (key) => (console.log(key)) );

// myMap.forEach( (value) => (console.log(`${value}`)) );

// myMap.forEach( (v, k) => (console.log(`${v} and key is : ${k}`)) );

// In map

// for of --> key first and then value

// for each --> value first and then key

myMap.delete(2);

console.log(myMap);

myMap.clear();

console.log(myMap);
