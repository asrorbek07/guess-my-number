'use strict';
let body = document.querySelector("body");
let elCheck = document.querySelector('.check');
let input = document.querySelector('.guess');
let elAgain = document.querySelector('.again');
let elMessage = document.querySelector('.message');
let elLabelScore = document.querySelector('.score');
let elHighScore = document.querySelector('.highscore');
let elNumber = document.querySelector('.number');
let score=20;
let hightscore=0;

let secretNumber = Math.trunc(Math.random() * 10);




elCheck.addEventListener('click', function () {
  if (!input.value) {
    elMessage.textContent = 'No Number';
  }else if(Number(input.value)===secretNumber){
    elNumber.textContent = secretNumber;
    elMessage.textContent = 'Correct Number';
    body.style.backgroundColor="#60b347";
    elNumber.style.width='30rem';
    input.value="";
    if(score>hightscore){
        hightscore=score;
        elHighScore.textContent=hightscore;
    }
  }  
  else if(score>1){
    elMessage.textContent = Number(input.value)>secretNumber?'too hight':'too low';
    score--;
    elLabelScore.textContent=score;
    input.value="";
    } else{
        elMessage.textContent = "you lost the game";
    }
});


elAgain.addEventListener('click', function(){
    score=20;
    secretNumber = Math.trunc(Math.random() * 10);
    elMessage.textContent="Start guessing...";
    elLabelScore.textContent=score;
    elNumber.textContent="?";
    body.style.backgroundColor="#222";
    elNumber.style.width='15rem';

});
