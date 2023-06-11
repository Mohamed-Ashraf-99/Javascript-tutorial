'use strict';
//Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const totalScr0 = document.querySelector("#score--0");
const totalScr1 = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const curScr0 = document.querySelector("#current--0");
const curScr1 = document.querySelector("#current--1");

let scores, currentScorce, activePlayer, playing;
//Start conditions
const init = function () {
  scores = [0, 0];
  currentScorce = 0;
  activePlayer = 0;
  playing = true;

  totalScr0.textContent = 0;
  totalScr1.textContent = 0;
  curScr0.textContent = 0;
  curScr1.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);
}
init();
const actToggle = function () {
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

//Switching the active player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;//Make current score for active player = 0 ;
  activePlayer = activePlayer === 0 ? 1 : 0; //switch active player
  actToggle();
  currentScorce = 0;//Make his score = zero when switch
}



//============Strat with Roll Button=============

//Start Roll dice
const addRollDice = function () {
  if (playing) {
    //1.Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2.Display Dice
    diceEl.src = `dice-${dice}.png`
    diceEl.classList.remove("hidden");
    //3.Check if Roll equal one ? switch to next player
    if (dice !== 1) {
      //Add dice to current score
      currentScorce += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScorce;//Add currentScorce to the active player
    }
    else {
      switchPlayer();
    }
  }
}

btnRoll.addEventListener('click', addRollDice);

//============Strat with Hold Button=============

//Add current score to active player total score
const addTotalScr = function () {
  scores[activePlayer] += currentScorce;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
}

//Check if score >= 100 Finish Game
const checkScore = function () {
  document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
  document.querySelector(`.player--${activePlayer}`).classList.add(`player--active`);
}

//Hold Score 
const holdeScore = function () {
  if (playing) {
    addTotalScr();
    if (scores[activePlayer] >= 20) {
      playing = false;
      checkScore();
    }
    else {
      switchPlayer();
    }
  }
}
//Hold Button
btnHold.addEventListener('click', holdeScore);

//============Strat with New Game Button=============

btnNew.addEventListener('click', init);

