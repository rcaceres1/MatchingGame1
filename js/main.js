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

/*----- app's state (variables) -----*/ 
 var round, win;

/*----- cached element references -----*/ 
const baseCard = document.getElementById('play-area1');
const choiceCard1 = document.getElementById('play-card1');
console.log(`first choice is... ${choiceCard1}`)

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
    baseCard.innerText=cards[randomInt()];
    choiceCard1.innerText=(baseCard.innerText);
    choiceCard2.innerText=cards[randomInt()];
    while (choiceCard1.innerText !== choiceCard2.innerText && 
            baseCard.innerText !== choiceCard2.innerText) {
        return choiceCard2.innerText[randomInt()];
    }
    
}

function randomInt() {
    let rand = Math.floor(Math.random() * Object.keys(cards).length);
    return rand;
}

function render() {
    //render match
    if (cards.indexOf === matchCard) return winAudio;
    // else if (timer === 0) return loseAudio;
    else return loseAudio;
};

function shuffleCards(cards) {
    cards.sort(function() {
        return Math.random() - .5;
    });
    render();
};

function playRound() {
    let baseCard = document.getElementById('play-area1');
    console.log("It's working!");

};




