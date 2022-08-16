// declarações de variaveis
let winMsg = "Victory";
let loseMsg = "Crushing Defeat";
let tieMsg = "Tie";
let moveList =["Rock","Paper","Scissors"];
let statusDisplay = document.querySelector("#status-head");
let moveDisplays = document.querySelectorAll(".move-display h2");
let buttons = document.querySelectorAll("button");

/*
 * Computes result of the game. returns victory message if move 1 wins.
 * @param  {Number}   move1  movimento 1
 * @param  {Number}   move2  movimento 2
 * @return {String}   result resultado do game
*/

function calcResult(move1, move2) {}

/*
 * @return {Number}   retorna numero aleatorio entre 0 e 2 para escolher pedra,papel ou tesoura.
*/

function randomMove() {
  return Math.floor(Math.random() * 3);
}

/*
 * Inicia o Game
*/
function startGame(){
  statusDisplay.textContent = "Choose!";
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = moveList[i];
    buttons[i].style.display = "inline-block";
  }
  
  moveDisplays.forEach(moveDisplay => moveDisplay.style.display="none");
}

/*
 * Evento que mostra quem ganho e finaliza o game
 * @param {Event} event event containing information of users input.
*/

function endGame(event) {}

startGame();