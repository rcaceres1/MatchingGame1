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
 // make new constants that store the inner text value of play cards

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
        return rand;
    }
    
    function render() {
        

        console.log(`base card is... ${baseCard.innerText}`)
        console.log(`first choice is... ${choiceCard1.innerText}`)
        console.log(`second choice is... ${choiceCard2.innerText}`)
        //render match
    };
    
    function verifyMatch(element) {
        console.log(element);
    if (baseCard.innerText === element.innerText) {
        console.log('You guessed correctly');
        shuffleCards();
        return winAudio;
    }
    // else if (timer === 0) return loseAudio;
    else {
        console.log('You guessed incorrectly');
        init();
        return loseAudio;
    }
}

function shuffleCards() {
    baseCard.innerText=cards[randomInt()];
    choiceCard1.innerText=(baseCard.innerText);
    choiceCard2.innerText=cards[randomInt()];
    while (choiceCard1.innerText !== choiceCard2.innerText && 
            baseCard.innerText !== choiceCard2.innerText) {
            return choiceCard2.innerText[randomInt()];
        }     
    render();
};

function playRound(evt) {
    verifyMatch(evt.target);
};




