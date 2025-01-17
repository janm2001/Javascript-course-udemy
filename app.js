/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
// use innerHtml is your want to change the elements and textContent if you only want to write text 
*/
var scores,activePlayer,roundScore;
init();

var dice = Math.floor((Math.random() *6)) +1;
console.log(dice);


//HIDES THE DICE IMAGE ELEMENT UNTIL WE START TO PLAY THE GAME


function nextPlayer(){
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

function init(){
    scores = [0,0];
    activePlayer=0;
    roundScore=0;


    document.querySelector(".dice").style.display = "none";

document.getElementById("score-0").textContent="0";
document.getElementById("score-1").textContent="0";
document.getElementById("current-0").textContent="0";
document.getElementById("current-1").textContent="0";

document.querySelector("#name-0").textContent="Player 1";
document.querySelector("#name-1").textContent="Player 2";

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");

document.querySelector(".player-0-panel").classList.add("active");
document.querySelector(".player-1-panel").classList.remove("active");
}






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
        nextPlayer();
            
        
    }
}); 
//or we could use anomyous function by putting a function in second argument


//DRY CODE is a code where we do not repeat some code instead we make it cleaner and faster

document.querySelector(".btn-hold").addEventListener("click", function(){
    //Add current score to the GLOBAL score
    scores[activePlayer] += roundScore;

    //Update the user interface
    document.querySelector("#score-"+activePlayer).textContent= scores[activePlayer];
    

    

    //Check if player won the game
    if(scores[activePlayer]>=100){
        document.querySelector("#name-"+activePlayer).textContent="Winner!";
        document.querySelector(".dice").style.display="none";//Hide the rolling dice picture
        document.querySelector("player-"+activePlayer+"-panel").classList.add("winner");
        document.querySelector("player-"+activePlayer+"-panel").classList.remove("active");
    }else{
        //Change a player turn if there is no winner
    nextPlayer();
    }
    
});

document.querySelector(".btn-new").addEventListener("click",init);



//document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector("#current-" + activePlayer).innerHTML="<em>" + dice + "</em>";

//var x = document.querySelector("#score-0").textContent;
//console.log(x);