// How to handle api in js

// core js

// class 

// handling api

// htttps://api.chucknorris.io

// cannot be run in node.js

// promises...

// resolve, reject

// fulfill -> then

// reject -> catch (error handling)

// axios...

// handling api.. fetch()

// then is used for handling positive response

// fetch('https://api.chucknorris.io/jokes/random') // return of fetch to then
// .then(response => {
//     console.log("API: ", response.json());
// }) // return of then to next then
// .then() // then to next then...
// .then() 
// .catch()  // error handling // try catch
// return on top comes to down..

// try {
    
// } catch (error) {
    
// }

// fetch('https://api.chucknorris.io/jokes/random') 
// .then(response => {
//     return response.json();
// })
// .then((data) => {
//     console.log("DATA is: ", data);
// }) 
// .catch();

fetch('https://api.chucknorris.io/jokes/random') 
.then(response => {
    return response.json();
})
.then((data) => {
    // console.log("DATA is: ", data);
    var joke = data.value;
    console.log("JOKE: ", joke);
}) 
.catch();

// lot more in js

