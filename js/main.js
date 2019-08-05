/*----- constants -----*/ 
const winAudio = new Audio ("http://soundbible.com/mp3/iMac_Startup_Chime-Carlo_-1849294605.mp3");
const loseAudio = new Audio ("http://soundbible.com/mp3/Zombie-Gibberish-SoundBible.com-589887278.mp3")
const outofTimeAudio = new Audio ("http://soundbible.com/mp3/Industrial_Alarm-SoundBible.com-1012301296.mp3")

const cards = {};

/*----- app's state (variables) -----*/ 
const playerScore, round, win;

/*----- cached element references -----*/ 
const playerScore = ;

/*----- event listeners -----*/ 
clickMatchCard = ;

clickWrongCard = ;

/*----- functions -----*/
render ();

function init() {
    playerScore = 0;
    round = 0;
    win = null;
}

function render() {
    //render match
    if (cards.indexOf === matchCard)
        return score += 10;
    else if (cards.indexOf !== matchCard)
        return score += 0;
    //render score 
};

function shuffleCards(cards) {
    cards.sort(function() {
        return Math.random() - .5;
    });
};

function playRound() {
    
};



