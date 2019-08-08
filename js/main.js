/*----- constants -----*/ 
const winAudio = new Audio("sounds/winner.wav");
const loseAudio = new Audio("sounds/lose.wav");


const cards = {
    0: 'pics/apple.jpg',
    1: 'pics/star.jpg',
    2: 'pics/banana.jpg',
    3: 'pics/storm.jpg',
    4: 'pics/hat.jpg',
    5: 'pics/dog.jpg',
    6: 'pics/happy.jpg',
    7: 'pics/frog.jpg',
    8: 'pics/cup.jpg',
    9: 'pics/pencil.jpg'
};

/*----- app's state (variables) -----*/ 
 var round, win; 
 

/*----- cached element references -----*/ 
const baseCard = document.getElementById('play-area1');
const choiceCard1 = document.getElementById('play-card1');
const choiceCard2 = document.getElementById('play-card2');
// const playAreaOne = document.querySelector('#play-area1');
// const playCardOne = document.querySelector('#play-card1');
// const playCardTwo = document.querySelector('#play-card2');
var message = document.querySelector('#message');
//const gameCards = document.querySelectorAll('.game-cards');

/*----- event listeners -----*/ 
document.querySelector('#play-card1')
    .addEventListener('click', playRound);

document.querySelector('#play-card2')
    .addEventListener('click', playRound);

document.getElementById('reset')
    .addEventListener('click', init);

/*----- functions -----*/
init();

function init() {
    round = 0;
    win = null;
    shuffleCards();
    }
    
    function randomInt() {
        let rand = Math.floor(Math.random() * Object.keys(cards).length);
        console.log (parseInt(rand))
        return rand;
    }
    
    function verifyMatch(element) {
    let base = baseCard.style.backgroundImage;
    let choice = element.style.backgroundImage;
    if (base === choice) {
        shuffleCards();
        message.innerHTML = `GOOD JOB! It's a match!`;
        return winAudio;
    }
    
    else {
        message.innerHTML = `Almost...try again!`; 
        init(); 
        return loseAudio;
         
    }

}

function shuffleCards() {
    function shuffle(array) {
       return array.sort(() => Math.random() - 0.5);
    }

    let base = cards[randomInt()];
    let card1 = base;
    let card2 = cards[randomInt()];
    let gameArr = []

    gameArr.push(card1, card2)

    let shuffledArr = shuffle(gameArr)
    
    baseCard.style.backgroundImage = `url(${shuffledArr[0]})`;
    choiceCard1.style.backgroundImage = `url(${shuffledArr[0]})`;
    choiceCard2.style.backgroundImage = `url(${shuffledArr[1]})`;
    };

function playRound(evt) {
    verifyMatch(evt.target);
};

// let randShuffArrIdx = Math.floor(Math.random() * shuffledArr.length;
// randShuffArrIdx
