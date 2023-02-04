const container2 = document.querySelector(".card_container");
const cards = document.querySelectorAll(".card");

document.getElementById("left2").addEventListener("click", function() {
    toPrevious2()
})

document.getElementById("right2").addEventListener("click", function() {
    toNext2()
})

let current2 = 0;
let prev2 = 1;
let next2 = 2;

const toPrevious2 = () => {

    if (current2 > 0) {
        toSlide2(current2 - 1)
    } else {
        toSlide2(cards.length - 1)
    }
}

const toNext2 = () => {

    if (current2 < cards.length - 1) {
        toSlide2(current2 + 1)
    } else {
        toSlide2(0)
    }
}

const toSlide2 = number2 => {
    current2 = number2;
    prev2 = current2 - 1;
    next2 = current2 + 1;

    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove("active");
        cards[i].classList.remove("prev");
        cards[i].classList.remove("next");
    }

    if (next2 == cards.length) {
        next2 = 0;
    }

    if (prev2 == -1) {
        prev2 = cards.length - 1;
    }

    cards[current2].classList.add("active");
    cards[prev2].classList.add("prev");
    cards[next2].classList.add("next");
}
