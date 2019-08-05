/*----- constants -----*/ 
// const winAudio = new Audio("http://soundbible.com/mp3/iMac_Startup_Chime-Carlo_-1849294605.mp3");
// const loseAudio = new Audio("http://soundbible.com/mp3/Zombie-Gibberish-SoundBible.com-589887278.mp3")
// const outofTimeAudio = new Audio("http://soundbible.com/mp3/Industrial_Alarm-SoundBible.com-1012301296.mp3")

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
const choiceCard2 = document.getElementById('play-card2');

/*----- event listeners -----*/ 
// clickMatchCard = ;

// clickWrongCard = ;

// clickReset = ;

/*----- functions -----*/
init();

function init() {
    round = 0;
    win = null;
    baseCard.innerText=cards[randomInt()];
    choiceCard1.innerText=(baseCard.innerText);
    choiceCard2.innerText=cards[randomInt()];
    while (choiceCard1.innerText && baseCard.innerText !== choiceCard2.innerText) {
        return choiceCard2.innerText[randomInt()];
    }
    
}

function randomInt() {
    let rand = Math.floor(Math.random() * Object.keys(cards).length);
    return rand;
}

// function render() {
//     //render match
//     if (cards.indexOf === matchCard)
//         return winAudio;
//     else if (cards.indexOf !== matchCard)
//         return loseAudio; 
// };

function shuffleCards(cards) {
    cards.sort(function() {
        return Math.random() - .5;
    });
    render();
};

function playRound() {
    let baseCard = document.getElementById('play-area1');

};



