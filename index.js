let score = {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore()

function yourMove(playerMove){
  const computerMove = chooseComputerMove();
  const result = document.querySelector('.result');

  if (playerMove === computerMove){
    result.innerHTML = "Tie";
    score.ties += 1;
  }
  else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    result.innerHTML = 'You win';
    score.wins += 1;
  }
  else {
    result.innerHTML = "you lose"
    score.losses +=1
  }

  const choosesMove = document.querySelector('.chooses');
  choosesMove.innerHTML = `
  You
  <img src="${playerMove}.png" class="icon">
  Computer
  <img src="${computerMove}.png" class="icon">
  `

  updateScore()
}

function resetScore(){
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
  updateScore()
}

function chooseComputerMove() {
  let computerMove;
  const randomNumber = Math.floor(Math.random() *3)

  if (randomNumber === 0){
    computerMove = 'rock'
  } else if (randomNumber === 1){
    computerMove = 'paper'
  } else {
    computerMove = 'scissors'
  }

  return computerMove
}

function updateScore(){
  document.querySelector('.score').innerHTML = `
  Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`
}