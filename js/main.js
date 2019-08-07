/*----- constants -----*/ 
const winAudio = new Audio("sounds/winner.wav");
const loseAudio = new Audio("sounds/lose.wav");
const outofTimeAudio = new Audio("sounds/alarm.wav");
var timer = 7000;

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
const playAreaOne = document.querySelector('#play-area1');
const playCardOne = document.querySelector('#play-card1');
const playCardTwo = document.querySelector('#play-card2');
const coundDown = document.querySelector('#timer');
var message = document.querySelector('#message');

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
    // updateTimer();
    }
    
    function randomInt() {
        let rand = Math.floor(Math.random() * Object.keys(cards).length);
        console.log (parseInt(rand))
        return rand;
    }
    
    function render(cardOne, cardTwo) {
        console.log('1', cardOne, '2', cardTwo);
    // This will be a function that renders the board according to the 
    // level that the player is at, which will be when the app is refactored.
        
    };
    

//     function updateTimer() {
//         if(timer === 0) {
//         message.innerHTML = `Time is up! Try again!`;
//         init();
//         return
//     }
//     timer -= 1000
//         let seconds = ((timer % 7000) / 1000).toFixed(1);
//     // This is where we call render
//     console.log(`
//     ${(seconds < 8 ? '0' : '')}${seconds}
//     `)
//     setTimeout(() => {
//         return updateTimer();
//     }, 3000)
// }
    
    function verifyMatch(element) {
    if (baseCard.cards === element.cards) {
        console.log('element', element.cards);
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

    baseCard.cards = base
    choiceCard1.cards = `${shuffledArr[0]}`
    choiceCard2.cards = `${shuffledArr[1]}`
    render(choiceCard1, choiceCard2); 
    };

//'background-image': 'url(' + cards[idx] + ')'
//document.getElementById("play-card1").style.
//  backgroundImage = "url(" + dir + images[randomCount] + ")";
// document.getElementById("play-card1").style.
//   backgroundImage = 'url(' + cards[idx] + ')'
//
//document.getElementById('divID').style.backgroundImage = 
//  "url(" + dir + images[randomCount] + ")";
function playRound(evt) {
    verifyMatch(evt.target);
};


// Notes for updating background images

/*
document.getElementById("play-card1")
.style.backgroundImage = `url(${cards[0]})`;

*/




