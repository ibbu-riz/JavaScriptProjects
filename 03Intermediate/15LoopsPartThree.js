// for in & for of .. loop

// one used in array[] & one used in objects{}

const names = [
    "Youtube", 
    "Facebook", 
    "Netflix", 
    "Spotify", 
    "Amazon", 
    "Instagram"
];

// For of... used for array

// for (const n of names) {
//     console.log(n);
// }

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "LearnCodeOnline"
}

// for in... used for objects

for (const s in symbols) {
    // console.log(s);
    // console.log(symbols[s]);
    console.log(`Key is: ${s} and value is: ${symbols[s]}`);
}
