//THE STARTING POINT
//User chooses to play against another player or computer

//prompt to type 'player or 'computer'

//check input - enforce lowercase on input

//Alert - 'you will play 3 rounds - get ready'

//player presses ok

const r = "rock";
const p = "paper";
const s = "scissors";
let player1Input = '';
let playerChoice = '';
let player2Input = '';
let player2Choice = '';
let player1Score = 0;
let player2Score = 0;

let userChoice = prompt('Please select a game mode by typing "player2" or "CPU" ')
   

   let gameModeInput = userChoice.toLowerCase();


  if(gameModeInput === 'player2'){
    alert("Game started between player 1 and player 2")
    alert('you will play 3 rounds - get ready')
  }else if(gameModeInput === 'cpu'){
    alert("Game started between player 1 and CPU")
    alert('you will play 3 rounds - get ready')
  }else {
    alert('Invalid input: Please refresh the page and pick between "player2" or "CPU"')
  }
  console.log(`Player 1 score: ${player1Score} Player 2 score : ${player2Score}`)   

for (let i = 0; i < 3; i++){
  if(gameModeInput === 'player2'){
            player1Input = prompt(`Player 1 please make your choice between "rock", "paper" or "scissors"`);
      console.log(player1Input)
       playerChoice = player1Input.toLowerCase();
      console.log(playerChoice);
      if (playerChoice === r || playerChoice === p  || playerChoice === s) {
        alert("Player 2 Get Ready");}
        else {alert("Invalid Input, please refesh the page and start the game again")}

    
        player2Input = prompt(`Player 2 please make your choice between "rock", "paper" or "scissors"`);
      console.log(player2Input)

       player2Choice = player2Input.toLowerCase();
      console.log(player2Choice);

      if (player2Choice === r || player2Choice === p  || player2Choice === s) {
        console.log(playGame());
      }else {
        alert("Invalid Input, please refesh the page and start the game again")
      }

    }

       

            function playGame (){
              playerChoice = player1Input.toLowerCase();
              player2Choice = player2Input.toLowerCase();
           if(playerChoice === r && player2Choice === s){
            alert('Player 1 you win this round')
            console.log(`Player 1 score: ${player1Score = player1Score + 1} Player 2 score : ${player2Score}`)      
           }else if(playerChoice === p && player2Choice === r){
            alert('Player 1 you win this round')
            console.log(`Player 1 score: ${player1Score = player1Score + 1} Player 2 score : ${player2Score}`)    
           }else if(playerChoice === s && player2Choice === p){
            alert('Player 1 you win this round')
            console.log(`Player 1 score: ${player1Score = player1Score + 1} Player 2 score : ${player2Score}`)    
           }else if(player2Choice === p && playerChoice ===  r){
            alert('Player 2 you win this round')
            console.log(`Player 1 score: ${player1Score} Player 2 score : ${player2Score = player2Score+ 1}`)    
           }else if(player2Choice === r && playerChoice === s){
            alert('Player 2 you win this round')
            console.log(`Player 1 score: ${player1Score} Player 2 score : ${player2Score = player2Score + 1}`)  
           }else if(player2Choice === s && playerChoice === p){
            alert('Player 2 you win this round')
            console.log(`Player 1 score: ${player1Score} Player 2 score : ${player2Score = player2Score + 1}`)  
           }else if(playerChoice === player2Choice){
            alert('It\'s a tie')
           }else{
            alert('error')
           }
           if (player1Score === 2){
                alert ("Player 1 Wins")}
           else if (player2Score === 2){
            alert ("Player 2 Wins")}
           }}
          
  
//PLAYER VS PLAYER ROUND 1



//Prompt player1 to choose 'rock', 'paper' or 'scissors' for round 1

//check player1choice valid input

//prompt player2 to choose between 'rock', 'paper' or 'scissors'

//check player2choice valid input enforce lower case

//compare player1choice with player2choice

//use 'possible outcomes' to determine the winner of that round.

//score 1 point for win, score 0 points for draw or loss

//store score

// PLAYER VS PLAYER ROUND 2

//Prompt player1 to choose 'rock', 'paper' or 'scissors' for round 2

//check player1choice valid input

//prompt player2 to choose between 'rock', 'paper' or 'scissors'

//check player2choice valid input

//compare player1choice with player2choice

//use 'possible outcomes' to determine the winner of that round.

//score 1 point for win, score 0 points for draw or loss

//store score 

//check if player1 or player2 has 'winCondition' 2 points

//If they have alert 'player1 wins' or player2 wins' and break for new game

//if they haven't alert 'get ready for the final round'

//---




//PLAYER VS PLAYER ROUND 3

//Prompt player1 to choose 'rock', 'paper' or 'scissors' for round 3

//check player1choice valid input

//prompt player2 to choose between 'rock', 'paper' or 'scissors'

//check player2choice valid input

//compare player1choice with player2choice

//use 'possible outcomes' to determine the winner of that round.

//score 1 point for win, score 0 points for draw or loss

//store score 

//check if player1 or player2 has 'winCondition' 2 points

//If they have alert 'player1 wins' or player2 wins' and break for new game

//if neither has 'winCondition' alert 'it's a draw

//And break for a new game'









//PLAYER VS COMPUTER ROUND 1

//Prompt player1 to choose 'rock', 'paper' or 'scissors' for round 1

//check player1Choice valid input

//CPU makes its choice in the background (math.random)

//prompt saying the cpu has made its choice

//compare player1Choice with cpuChoice

//use 'possible outcomes' to determine the winner of that round.

//score 1 point for win, score 0 points for draw or loss

//store score



//PLAYER VS COMPUTER ROUND 2

//Prompt player1 to choose 'rock', 'paper' or 'scissors' for round 2

//check player1Choice valid input

//CPU makes its choice in the background (math.random)

//prompt saying the cpu has made its choice

//compare player1Choice with cpuChoice

//use 'possible outcomes' to determine the winner of that round.

//score 1 point for win, score 0 points for draw or loss

//store score 

//check if player1 or cpu has 'winCondition' 2 points

//If they have alert 'player1 wins' or cpu wins' and break for new game

//if they haven't alert 'get ready for the final round'




//PLAYER VS COMPUTER ROUND 3

//Prompt player1 to choose 'rock', 'paper' or 'scissors' for round 3

//check player1Choice valid input

//CPU makes its choice in the background (math.random)

//prompt saying the cpu has made its choice

//compare player1Choice with cpuChoice

//use 'possible outcomes' to determine the winner of that round.

//score 1 point for win, score 0 points for draw or loss

//store score 

//check if player1 or cpu has 'winCondition' 2 points

//If they have alert 'player1 wins' or cpu wins' and break for new game

//if they haven't alert 'it's a draw

//And break for a new game'


