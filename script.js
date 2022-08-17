// declarações de variaveis
let winMsg = "Ganhou, Boa";
let loseMsg = "Perdeu kkkkkkk";
let tieMsg = "Empatou né, tenta dnv";
let moveList =["Rock","Paper","Scissors"];
let statusDisplay = document.querySelector("#status-head");
let moveDisplays = document.querySelectorAll(".move-display h2");
let buttons = document.querySelectorAll("button");

/**
 * Computes result of the game. returns victory message if move 1 wins.
 * @param  {Number}   move1  move 1
 * @param  {Number}   move2  move 2
 * @return {String}   result result of the game
 */
function calcResult(move1, move2) {

  // se pedra(0) - tesoura(2) = -2, papel(1)-pedra(0) = 1, tesour(2) - papel (1) =1.
  // pedra(0) - papel(1) = -1, papel(1) - tesoura(2)= -1, tesoura(2) -pedra(0)=2. 
  // outros resultados são empates pedra-pedra,papel-papel,tesoura-tesoura.

  var result = move1 - move2;

  if (result == 1 || result + 3 == 1) { 
    return winMsg;
  } else if (result == 2 || result + 3 == 2) { 
    return loseMsg;
  } else { 
    return tieMsg;
  }
}
/** 
  @return {Number}
*/

function randomMove() {
  return Math.floor(Math.random() * 3);
}

/*
 * Inicia o Game
*/
function startGame(){
  statusDisplay.textContent = "PEDRA, PAPEL OU TESOURA?!";
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = moveList[i];
    buttons[i].style.display = "inline-block";
    buttons[i].removeEventListener("click", startGame)
    buttons[i].addEventListener("click", endGame);
  }
  
  moveDisplays.forEach(moveDisplay => moveDisplay.style.display="none");
}

/*
 * Evento que mostra quem ganho e finaliza o game
 * @param {Event} event event containing information of users input.
*/


function endGame(event) {
  let playerMove = moveList.indexOf(event.target.textContent);
  let computerMove = randomMove();

  statusDisplay.textContent = calcResult(playerMove, computerMove);

  moveDisplays.forEach(
    (moveDisplay) => (moveDisplay.style.display = "inline-block")
  );
  moveDisplays[0].textContent = `You played ${moveList[playerMove]}`;
  moveDisplays[1].textContent = `Computer played ${moveList[computerMove]}`;

  buttons.forEach((button, index) => {
    if (index == 1) {
      button.textContent = "DENOVO,VAI ARREGA?";
      button.removeEventListener("click", endGame);
      button.addEventListener("click", startGame);
    } else {
      button.style.display = "none";
    }
  });
}

startGame();
