'use strict ';

// console.log(document.querySelector('.message').textContent);
// const x = function(){
//    console.log(23);
// };


let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore =0;



document.querySelector('.check').addEventListener(
    'click', function(){

    const guess =Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
//         

   if(!guess){
       document.querySelector('.message').textContent ='No number!'
   }else if( guess === secretNumber){
    document.querySelector('.message').textContent
    ='Correct Number!';
    document.querySelector('.number').textContent =secretNumber;
console.log(secretNumber);

document.querySelector('body').style.background = '#60b347';
document.querySelector('.number').style.width = '38rem;'


if(score > highScore){
    highScore = score;
    document.querySelector('.highScore').textContent =highScore;
}

   }else if(guess > secretNumber){
       if(score >1){

           document.querySelector('.message').textContent
           ='Too Higher!';
           score--;
           document.querySelector('.score').textContent = score;
       }else{
           document.querySelector('.message').textContent=
           'You lost the Game';
           document.querySelector('.score').textContent =0;
       }
   }else if(guess < secretNumber){
       if(score >1){

           document.querySelector('.message').textContent
           ='Too low!';
           score--;
           document.querySelector('.score').textContent = score;
       }else{
        document.querySelector('.message').textContent=
        'You lost the Game';
        document.querySelector('.score').textContent =0;
       }
   }
    }
     
);
 
document.querySelector('.again').addEventListener('click',
function(){
  score =20;
  secretNumber=Math.trunc(Math.random()*20)+1;

  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent=score;
  document.querySelector('.number').textContent='?';
  document.querySelector('.guess').value= '';

  document.querySelector('body').style.background ='#222';
  document.querySelector('.number').style.width
= '15rem';
});