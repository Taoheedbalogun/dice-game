'use strict';

const diceEl = document.querySelector('.dice');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');

let currentScore, activePlayer, score, playing;
const init = () => {
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0];
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  diceEl.classList.add('hidden');
  playerEl0.classList.remove('player--winner');
  playerEl1.classList.remove('player--winner');
  playerEl1.classList.remove('player--active');
  playerEl0.classList.add('player--active');
};

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
};

init();

btnRoll.addEventListener('click', function () {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNumber}.png`;

    document.getElementById(`current--${activePlayer}`).textContent =
      diceNumber;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
