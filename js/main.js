/*----- constants -----*/ 
const winAudio = new Audio("#");
const loseAudio = new Audio("#");
const outofTimeAudio = new Audio("#");

const cards = {
    0: 'star',
    1: 'apple',
    2: 'banana',
    3: 'storm', 
    4: 'hat', 
    5: 'dog', 
    6: 'happy',
    7: 'frog',
    8: 'cup',
    9: 'pencil'
};

// const cardsArr = {
//     0: {
//         name: 'star',
//         img: '<path >'
//     },
// }

/*----- app's state (variables) -----*/ 
 var round, win; 
 

/*----- cached element references -----*/ 
const baseCard = document.getElementById('play-area1');
const choiceCard1 = document.getElementById('play-card1');
const choiceCard2 = document.getElementById('play-card2');

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
    
    function render() {
        
    };
    
    function verifyMatch(element) {
    if (baseCard.innerText === element.innerText) {
        console.log('You guessed correctly');
        shuffleCards();
        return winAudio;
    }
    
    else {
        console.log('You guessed incorrectly');
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

    baseCard.innerText = base
    choiceCard1.innerText = `${shuffledArr[0]}`
    choiceCard2.innerText = `${shuffledArr[1]}` 
    };



function playRound(evt) {
    verifyMatch(evt.target);
};




