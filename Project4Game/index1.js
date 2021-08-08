// Logic of the game

// many divs in html are of class card

// querySelectorAll()

const cards = document.querySelectorAll(".card");

console.log(cards);

//Here nodelist is an array
cards.forEach((card) => card.addEventListener("click", flip));

// variables

var isFlipped = false; // checking whether the card is flipped...

var firstCard; // here first and second card is null or un defined

var secondCard;

function flip() {
    // console.log("Card Flipped");
    // console.log(this);
    this.classList.add("flip");

    if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
    } else {
        secondCard = this;
        console.log(firstCard);
        console.log(secondCard);
        checkIt();
    }
}

function checkIt() {
    // console.log("Checking...");
    // Compare based on data-image in html
    // if (firstCard.dataset.image === secondCard.dataset.image) {
    //     success();
    // } else {
    //     fail();
    // }
    // Ternary operator
    firstCard.dataset.image === secondCard.dataset.image ? success() : fail()
}

function success() {
    // console.log("Success");
    firstCard = removeEventListener("click", flip)
    secondCard = removeEventListener("click", flip)
    reset();
}

function fail() {
    // console.log("Failed");
    // this.classList.add("flip");
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 1000)
}

function reset() {
    isFlipped = false;

    firstCard = null;

    secondCard = null;
}


//TODO: shuffle

(function shuffle() {
    cards.forEach((card) => {
        // Flex box
        var index = Math.floor(Math.random() * 16);
        card.style.order = index; // Flex box
    });
})();

// window.onload(shuffle())
// shuffle()
