let score=0;
let randomizer;
const handArray = ['rock', 'paper', 'scissor'];
let computerHand;
let inResult;
const playerTurn = document.getElementById("player-turn");
const computerTurn = document.getElementById("computer-turn");
const result = document.getElementById("result");
const scoreBoard = document.getElementById("scoreBoard");

scoreBoard.textContent = `SCORE: ${score}`;

function playGame(userHand){
    randomizer = Math.floor(Math.random()*3 );
    computerHand = handArray[randomizer];
    playerTurn.textContent = `PLAYER TURN:  ${userHand}`;
    computerTurn.textContent = `COMPUTER TURN: ${computerHand}`;

    if(userHand == computerHand){
        inResult = "tie";
    }
    else{
        switch(userHand){
        case 'rock':
            inResult = (computerHand === 'scissor') ? "win" : "lose";
            break;
        
        case 'paper':
            inResult = (computerHand === 'rock') ? "win" : "lose";
            break;

        case 'scissor':
            inResult = (computerHand === 'paper') ? "win" : "lose";
            break;
    }
    }

    if(inResult == "tie"){
        if(result.classList.contains("win")){
            result.classList.remove("win");
        }
        else if(result.classList.contains("lose")){
            result.classList.remove("lose");
        }
        result.classList.add("tie");
        result.textContent = "It's a TIE 😅";
        
        
    }
    else if(inResult == "win"){
        score += 10;
        if(result.classList.contains("tie")){
            result.classList.remove("tie");
        }
        else if(result.classList.contains("lose")){
            result.classList.remove("lose");
        }
        result.classList.add("win");
        result.textContent = "YOU WON 😎";
        
    }
    else{
        if(score > 0)
            score -= 10;
        if(result.classList.contains("win")){
            result.classList.remove("win");
        }
        else if(result.classList.contains("tie")){
            result.classList.remove("tie");
        }
        result.classList.add("lose");
        result.textContent = "YOU LOSE 🥲";
    }
    scoreBoard.textContent = `SCORE: ${score}`;
}