'use strict';



// document.querySelector(".score").textContent = "15";
// document.querySelector(".guess").value; 

const checkBtn = document.querySelector('.check');
const msg = document.querySelector(".message");
let secrectNum = Math.trunc(Math.random() * 20) + 1;
const num = document.querySelector(".number");
let score = document.querySelector(".score");
let counter = 20;
const againBtn = document.querySelector('.again');
const input = document.querySelector('.guess');
const highScore = document.querySelector('.highscore');
const disPlayMsg = function (message) {
  msg.textContent = message;
}

checkBtn.addEventListener('click', check);

function check() {
  const guessNum = Number(document.querySelector('.guess').value);

  if (!guessNum) {
    disPlayMsg("No Number!");
  }
  //When Player Win!
  else if (guessNum === secrectNum) {
    disPlayMsg("Correct Number!");
    document.querySelector('body').style.backgroundColor = '#60b347';
    num.style.width = '30rem';
    highScore.textContent = counter;
  }
  //When guess is wrong!
  else if (guessNum !== secrectNum) {
    if (counter > 1) {
      msg.textContent = guessNum > secrectNum ? "Too High!" : "Too Low!";
      counter--;
      score.textContent = counter;
    }
    else {
      disPlayMsg("Game Over!");
      score.textContent = 0;
    }
  }
}

againBtn.addEventListener('click', again)

function again() {
  document.querySelector('body').style.backgroundColor = '#222';
  secrectNum = Math.trunc(Math.random() * 20) + 1;
  msg.textContent = "Start guessing...";
  counter = 20;
  score.textContent = counter;
  num.style.width = '15rem';
  input.value = "";
  highScore.textContent = 0;
}

