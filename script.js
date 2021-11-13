
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
const score1=document.querySelector('#score--0');
const score2=document.querySelector('#score--1');
const curentScore1=document.getElementById('current--0')
const curentScore2=document.getElementById('current--1')
const dice=document.querySelector('.dice');
const btnnew=document.querySelector('.btn--new');
const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');

score1.textContent=0;
score2.textContent=0;
dice.classList.add('hidden')

let scores=[0, 0]
let currentScore=0;
let activePlayer=0;
let win=false;

const reload=function(){
score1.textContent=0;
score2.textContent=0;
curentScore2.textContent=0
curentScore1.textContent=0

scores=[0, 0]
currentScore=0;
activePlayer=0;
win=false;

dice.classList.add('hidden')   
player0.classList.remove('player--winner')
player0.classList.add('player--active')
player1.classList.remove('player--winner')
player1.classList.remove('player--active')  

}

const switchPlayer=function(){
    document.getElementById(`current--${activePlayer}`).textContent=0
    activePlayer= activePlayer === 0 ? 1 :0;
    currentScore=0
     player0.classList.toggle('player--active')
     player1.classList.toggle('player--active')
}


btnroll.addEventListener('click',function(){

    if(!win){

    const diceroll =Math.trunc(Math.random()*6)+1;
    
    dice.classList.remove('hidden');
    dice.src=`dice-${diceroll}.png` ;
    if(diceroll !==1){
        currentScore=currentScore+diceroll; 
        document.getElementById(`current--${activePlayer}`).textContent=currentScore   
    
    }
    else{
  switchPlayer();

}
}   
})

btnhold.addEventListener('click',function(){
    if(!win){

    scores[activePlayer]+=currentScore
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer]
    if(scores[activePlayer]>=50){

document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
 win=true;
 dice.classList.add('hidden');
    }
    else{

    switchPlayer();
    }
}
})

btnnew.addEventListener('click',reload)