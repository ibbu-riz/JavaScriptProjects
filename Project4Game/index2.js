const cards = document.querySelectorAll(".card");

cards.forEach((card) => card.addEventListener("click", flip));

var isFlipped = false;

const defaultSelection = [null, null];

var [firstCard, secondCard] = defaultSelection;

var reset = () => {
    isFlipped = false;
    [firstCard, secondCard] = defaultSelection;
}

var success = () => {
    firstCard = removeEventListener("click", flip)
    secondCard = removeEventListener("click", flip)
    reset();
}

var fail = () => {
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 1000)
}

var checkIt = () => {
    firstCard.dataset.image === secondCard.dataset.image ? success() : fail()
}

function flip() {
    this.classList.add("flip");

    if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
    } else {
        secondCard = this;
        checkIt();
    }
}

var shuffle = () => {
    cards.forEach((card) => {
        var index = Math.floor(Math.random() * 16);
        card.style.order = index;
    });
}

window.onload(shuffle());
// shuffle()
