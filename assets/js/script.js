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
    },
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
    }/*,
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
    },*/
];

cardsArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result")
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

//create the bord

function createBoard(gameCardArray, gameBoard) {
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
        alert('You found a match');
    }
    else {
        cards[optionOneId].setAttribute('src', 'assets/img/blank.png');
        cards[optionTwoId].setAttribute('src', 'assets/img/blank.png');
        alert('Try again !')
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.innerHTML = cardsWon.length.toString()
    if (cardsWon.length === cardsArray.length/2) {
        resultDisplay.innerHTML = "you win !!"
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

createBoard(cardsArray, grid)