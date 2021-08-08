// Get to know node elements in js

// html tag class have many class names in attributes..

// text - javascript course in index.html is text node and

// span  is also text node or element

// Generating elements and text node in DOM

const courses = [
    // {}, {}, {},
    {
        name: "Complete ReactJS course",
        price: "2.3"
    },
    {
        name: "Complete Angular course",
        price: "2.1"
    },
    {
        name: "Complete MERN course",
        price: "2.8"
    },
    {
        name: "Complete C++ course",
        price: "2.9"
    },
    {
        name: "Django course",
        price: "7.4"
    },
    {
        name: "AWS course",
        price: "3.5"
    },
    {
        name: "Bootstrap 5 course",
        price: "5.6"
    }
];

// createElement() --> <></>

// createElement("p") --> <p></p>

// createElement("li") --> <li></li>

// ul
{/* <li class="list-group-item">
Complete C++ course
<span class="float-right">$2.1</span>
</li> */}
// ul

{/*  */}

// Html class is always a class list not,
// only 1 class

function generateLIST() {
    // Grab ul element tag
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";  // this is resetting our ul element

    // Construct li element tag and inject elements

    courses.forEach(course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode(`$${course.price}`);
        // const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    });
}

// Both down are same

// generateLIST();

window.addEventListener("load", generateLIST);

const sortLHBtn = document.querySelector(".sort-lh-btn");

// Here courses --> array

// there a,b --> objects

sortLHBtn.addEventListener("click", () => {
    courses.sort( (a, b) => a.price - b.price );
    generateLIST();
});

const sortHLBtn = document.querySelector(".sort-hl-btn");

sortHLBtn.addEventListener("click", () => {
    courses.sort( (a, b) => b.price - a.price);
    generateLIST();
});

