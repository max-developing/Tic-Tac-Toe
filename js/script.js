'use strict';

const score0 = document.getElementById('score-0');
const score1 = document.getElementById('score-1');
const draw = document.getElementById('score-x');
const field = document.querySelectorAll('.xoGame__board--value');
const refresh = document.querySelector('.xoGame__btn');

const xo = ['X', 'O'];
let activePlayer, scores, gamePlaying, drawRound;
score0.textContent = 0;
score1.textContent = 0;
scores = [0, 0];
drawRound = 0;

const init = function () {
    activePlayer = 0;
    gamePlaying = true;

    for (let i = 0; i < field.length; i++) {
        // Deleting current values of the fields
        field[i].innerHTML = '&nbsp;';
    }
}
init();

const endRound = function () {
    gamePlaying = false;
    scores[activePlayer]++;
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

}

for (let i = 0; i < field.length; i++) {
    // Deleting current values of the fields
    field[i].innerHTML = '&nbsp;';

    // Adding X or O
    field[i].addEventListener('click', function () {
        if (gamePlaying) {
            if (field[i].textContent !== 'X' && field[i].textContent !== 'O') {

                field[i].textContent = xo[activePlayer];

                // Check if there is a winner
                if (field[0].textContent === 'X' && field[1].textContent === 'X' && field[2].textContent === 'X') {
                    endRound();
                } else if (field[0].textContent === 'O' && field[1].textContent === 'O' && field[2].textContent === 'O') {
                    endRound();
                } else if (field[3].textContent === 'X' && field[4].textContent === 'X' && field[5].textContent === 'X') {
                    endRound();
                } else if (field[3].textContent === 'O' && field[4].textContent === 'O' && field[5].textContent === 'O') {
                    endRound();
                } else if (field[6].textContent === 'X' && field[7].textContent === 'X' && field[8].textContent === 'X') {
                    endRound();
                } else if (field[6].textContent === 'O' && field[7].textContent === 'O' && field[8].textContent === 'O') {
                    endRound();
                } else if (field[0].textContent === 'X' && field[3].textContent === 'X' && field[6].textContent === 'X') {
                    endRound();
                } else if (field[0].textContent === 'O' && field[3].textContent === 'O' && field[6].textContent === 'O') {
                    endRound();
                } else if (field[1].textContent === 'X' && field[4].textContent === 'X' && field[7].textContent === 'X') {
                    endRound();
                } else if (field[1].textContent === 'O' && field[4].textContent === 'O' && field[7].textContent === 'O') {
                    endRound();
                } else if (field[2].textContent === 'X' && field[5].textContent === 'X' && field[8].textContent === 'X') {
                    endRound();
                } else if (field[2].textContent === 'O' && field[5].textContent === 'O' && field[8].textContent === 'O') {
                    endRound();
                } else if (field[0].textContent === 'X' && field[4].textContent === 'X' && field[8].textContent === 'X') {
                    endRound();
                } else if (field[0].textContent === 'O' && field[4].textContent === 'O' && field[8].textContent === 'O') {
                    endRound();
                } else if (field[2].textContent === 'X' && field[4].textContent === 'X' && field[6].textContent === 'X') {
                    endRound();
                } else if (field[2].textContent === 'O' && field[4].textContent === 'O' && field[6].textContent === 'O') {
                    endRound();
                } else {
                    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

                }
            }
        }
    })
}

refresh.addEventListener('click', init);






