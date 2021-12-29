

let playerScore = 0;
let pcScore = 0;
const reset = document.getElementById("reset");


function compareVal(playerVal, pcVal) {
  if (playerVal === pcVal) {
    win.textContent = " Same result";
  }

  if (
    (playerVal === "ROCK" && pcVal === "SCISSORS") ||
    (playerVal === "PAPER" && pcVal === "ROCK") ||
    (playerVal === "SCISSORS" && pcVal === "PAPER")
  ) {
    playerScore++;
    win.textContent = "You are Win";
  }
  if (
    (pcVal === "ROCK" && playerVal === "SCISSORS") ||
    (pcVal === "SCISSORS" && playerVal === "PAPER") ||
    (pcVal === "PAPER" && playerVal === "ROCK")
  ) {
    pcScore++;
    win.textContent = "Pc is Win";
  }
}


function randPc() {
  let rand = Math.floor(Math.random() * 3);

  switch (rand) {
    case 0:
      return 'ROCK';
    case 1:
      return 'PAPER';
    case 2:
      return 'SCISSORS';
  }
}



const c2 = document.getElementById("choice2");
const c1 = document.getElementById("choice1");

const s1 = document.getElementById("score1");
const s2 = document.getElementById("score2");

const win = document.getElementById("winner");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener('click' , () => handleClick('ROCK'));
paperBtn.addEventListener('click' , () => handleClick('PAPER'));
scissorsBtn.addEventListener('click' , () => handleClick('SCISSORS'));
reset.addEventListener('click', playAgain);

function playAgain(){
  window.location.reload();
}

function checkScore(player,pc){

  if(player === 5 || pc === 5 )
  {
    if(player === 5 )
    {
      document.getElementById("winner").style.display = 'flex';
      document.getElementById("winner").style.blockSize = '100px';
      document.getElementById("winner").style.textAlign = '50px';
      document.getElementById("winner").style.alignItems = 'center';
      document.getElementById("winner").style.justifyContent = 'center';
      document.getElementById("winner").style.background = 'rgb(174, 197, 220)';
      document.getElementById("winner").textContent = 'YOU WIN';

    }
    else{
      document.getElementById("winner").style.display = 'flex';
      document.getElementById("winner").style.blockSize = '100px';
      document.getElementById("winner").style.textAlign = '50px';
      document.getElementById("winner").style.alignItems = 'center';
      document.getElementById("winner").style.justifyContent = 'center';
      document.getElementById("winner").style.background = 'rgb(174, 197, 220)';
      document.getElementById("winner").textContent = 'PC WIN';
    }
  }
  if(player > 5 || pc > 5 )
  {
 playAgain();

  }
}



function updateChoice(playerVal, pcVal) {
  switch (pcVal) {
    case 'ROCK':
      c2.innerHTML = "✊";
      break;
    case 'PAPER':
      c2.innerHTML = "✋";
      break;
    case 'SCISSORS':
      c2.innerHTML = "✌";
      break;
  }

  switch (playerVal) {
    case 'ROCK':
      c1.innerHTML = "✊";
      break;
    case 'PAPER':
      c1.innerHTML = "✋";
      break;
    case 'SCISSORS':
      c1.innerHTML = "✌";
      break;
  }
}





function handleClick(playerChoise) {
  checkScore(playerScore,pcScore);    

  const PChoise = randPc();
  updateChoice(playerChoise,PChoise);
  compareVal(playerChoise,PChoise);

      s1.innerHTML = playerScore;
      s2.innerHTML = pcScore;
  checkScore(playerScore,pcScore);    

  }


