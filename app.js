/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
// use innerHtml is your want to change the elements and textContent if you only want to write text 
*/

var scores = [0,0];
var roundScore = 0;
var activePlayer = 0;

var dice = Math.floor((Math.random() *6)) +1;
console.log(dice);


//HIDES THE DICE IMAGE ELEMENT UNTIL WE START TO PLAY THE GAME
document.querySelector(".dice").style.display = "none";

document.getElementById("score-0").textContent="0";
document.getElementById("score-1").textContent="0";
document.getElementById("current-0").textContent="0";
document.getElementById("current-1").textContent="0";






document.querySelector(".btn-roll").addEventListener("click",function(){
    //1.random number from 1-6
    var dice = Math.floor((Math.random() *6)) +1;
    //2.Display results
    var diceDOM= document.querySelector(".dice");
    diceDOM.style.display="block";
    diceDOM.src = "dice-" + dice +".png";
    //3. update the round score if the rolled number  was NOT 1
    if(dice !==1){
        //Add score
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;


    }else{
        //Next player
        //Better was to check if players 1 or player 2 is active is also cleaner and faster
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        //same as if(activeplayer === 0) activeplayer = 1;else...
        //setting roundScore to 0 so we could reset the round because the round is over
        roundScore = 0;
        //displaying contents to the user
        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";
        //Toogle class active so if there is class active it would be removed if there is not it would be added
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

        //document.querySelector(".player-0-panel").classList.add("active");
       // document.querySelector(".player-1-panel").classList.remove("active");
       //Hide the dice so the next player can play and see his dice
       document.querySelector(".dice").style.display="none";
            
        
    }
}); 
//or we could use anomyous function by putting a function in second argument





//document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector("#current-" + activePlayer).innerHTML="<em>" + dice + "</em>";

//var x = document.querySelector("#score-0").textContent;
//console.log(x);