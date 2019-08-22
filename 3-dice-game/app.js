/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, diceDOM, diceDOM1, gameOn, six, matchScore, defineScore;

newScore();

document.querySelector('.btn-roll').addEventListener('click', () => {
    if (gameOn) {
        // Rolls a random number
        let diceOne = Math.floor(Math.random() * 6) + 1;
        let diceTwo = Math.floor(Math.random() * 6) + 1;

        if (diceOne === 6 && diceTwo === 6) {
            six = 2;
        }

        if (six !== 2) {
            // Dice styling
            diceDOM.style.display = 'block';
            diceDOM1.style.display = 'block';
            diceDOM.src = 'dice-' + diceOne + '.png';
            diceDOM1.src = 'dice-' + diceTwo + '.png';

            if (diceOne !== 1 && diceTwo !== 1) {
                roundScore += diceOne + diceTwo;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
                console.log('Rolled one!')
                nextPLayer();
            }
        } else {
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            document.getElementById('current-' + activePlayer).textContent = '0';
            console.log('Double six!')
            nextPLayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', () => {
    if (gameOn) {
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= matchScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gameOn = false;
        } else {
            nextPLayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', newScore);

function init() {
    if (matchScore) {
        scores = [0, 0];
        activePlayer = 0;
        roundScore = 0;
        gameOn = true;
        six = 0;
        diceDOM = document.querySelector('.dice-0');
        diceDOM1 = document.querySelector('.dice-1');

        diceDOM.style.display = 'none';
        diceDOM1.style.display = 'none';
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
        document.querySelector('.match-score').style.display = 'none';
        document.querySelector('.define-score').textContent = 'Match score: ' + matchScore;
    }
}

function nextPLayer() {
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    six = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceDOM.style.display = 'none';
    diceDOM1.style.display = 'none';
}

function setScore(e) {
    if (e.keyCode === 13) {
        matchScore = document.querySelector('.match-score').value;
        init();
    }
}

function newScore() {
    document.querySelector('.match-score').addEventListener('keydown', setScore);
    document.querySelector('.match-score').style.display = 'block';
    document.querySelector('.define-score').textContent = 'Define the match score!';
}