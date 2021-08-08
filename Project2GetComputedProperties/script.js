const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center")

// Get computed properties in js

// Global object --> window

// Get properties of the elements --> bg color, font family,..

// console.log(window.getComputedStyle(red).background);
// console.log(window.getComputedStyle(red).fontFamily);
// console.log(window.getComputedStyle(red).backgroundColor);

// Grabing elements

// backgroundColor instead of background-color in written in css

// fontFamily instead of font-family in css we written

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// console.log(getBGColor(pink));
// console.log(getBGColor(orange));
// console.log(getBGColor(cyan));

// Event listener in js
// var orangeElementColor = getBGColor(orange);

// // two params what listener , what to do

// orange.addEventListener("mouseenter", () => {
//     center.style.background = orangeElementColor;
// });

// var color = getBGColor(pink);

// pink.addEventListener("click", () => {
//     center.style.background = color;
// });

// dblclick, mouseleave

// var color = getBGColor(pink);

// pink.addEventListener("mouseleave", () => {
//     center.style.background = color;
// });

const magicColorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    });
};

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));

// Enjoying so much javascript
