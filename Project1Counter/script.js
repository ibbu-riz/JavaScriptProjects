// SetTimeOut(function, milliseconds)

// setInterval(function, milliseconds)

// used query selector to grab elements in web page

// .class_name or #id_name

// var counter = document.querySelector(".counter");
// var followers = document.querySelector(".followers"); // shift + alt + down arrow

var counter = document.getElementById("counter");
var followers = document.getElementById("followers"); 

// counter.innerHTML = "1000";

let count = 1;

setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count;
    }
}, 1);


setTimeout(() => {
    followers.innerText = "Followers in Instagram!"
}, 6000);