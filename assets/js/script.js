const cardsArray = [
    {
        name: 'css',
        img: 'assets/img/css.png'
    },
    {
        name: 'css',
        img: 'assets/img/css.png'
    },
    {
        name: 'cube',
        img: 'assets/img/cube.png'
    },
    {
        name: 'cube',
        img: 'assets/img/cube.png'
    },
    {
        name: 'jq',
        img: 'assets/img/jq.png'
    },
    {
        name: 'jq',
        img: 'assets/img/jq.png'
    },/*
    {
        name: 'node',
        img: 'assets/img/node.png'
    },
    {
        name: 'node',
        img: 'assets/img/node.png'
    },
    {
        name: 'php',
        img: 'assets/img/php.png'
    },
    {
        name: 'php',
        img: 'assets/img/php.png'
    },
    {
        name: 'ps',
        img: 'assets/img/ps.png'
    },
    {
        name: 'ps',
        img: 'assets/img/ps.png'
    },
    {
        name: 'py',
        img: 'assets/img/py.png'
    },
    {
        name: 'py',
        img: 'assets/img/py.png'
    },
    {
        name: 's',
        img: 'assets/img/s.png'
    },
    {
        name: 's',
        img: 'assets/img/s.png'
    },
    {
        name: 'sass',
        img: 'assets/img/sass.png'
    },
    {
        name: 'sass',
        img: 'assets/img/sass.png'
    },
    {
        name: 'w',
        img: 'assets/img/w.png'
    },
    {
        name: 'w',
        img: 'assets/img/w.png'
    }*/
];



const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
const startBtn = document.querySelector("#startBtn");
const restartBtn = document.querySelector("#tryAgainBtn")
const homeSection = document.querySelector("#home");
const gameSection = document.querySelector("#game");
const scoreSection = document.querySelector("#score");
const info = document.querySelector("#info");
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];
let tryCounter = 0;

//create the bord

function createBoard(gameCardArray, gameBoard) {
    gameCardArray.sort(() => 0.5 - Math.random())
    for (let i = 0; i < gameCardArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'assets/img/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    }
}

function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]){
        cards[optionOneId].setAttribute('src', 'assets/img/white.png');
        cards[optionTwoId].setAttribute('src', 'assets/img/white.png');
        cardsWon.push(cardsChosen);
        info.innerHTML = "Vous avez trouver une paire !! ";
    }
    else {
        cards[optionOneId].setAttribute('src', 'assets/img/blank.png');
        cards[optionTwoId].setAttribute('src', 'assets/img/blank.png');
        info.innerHTML = "Essayez encore !!"
    }
    cardsChosen = [];
    cardsChosenId = [];
    tryCounter++;
    resultDisplay.innerHTML = cardsWon.length.toString()
    if (cardsWon.length === cardsArray.length/2) {
        gameSection.style.display = "none";
        scoreSection.style.display = "block";
        resultDisplay.innerHTML = "Vous avez réussit en " + tryCounter.toString() + " essais pour " + (cardsArray.length /2).toString() + " paire.";
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardsArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

startBtn.addEventListener("click", () => {
    homeSection.style.display = "none";
    gameSection.style.display = "block"
    createBoard(cardsArray, grid);
})

restartBtn.addEventListener("click", () => {
    scoreSection.style.display = "none";
    cardsChosen = [];
    cardsChosenId = [];
    cardsWon = [];
    grid.innerHTML = ""
    tryCounter = 0;
    createBoard(cardsArray, grid);
    gameSection.style.display = "block";
})