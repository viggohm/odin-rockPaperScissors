const CHOICES = ["rock", "paper", "scissors"];

let getComputerChoice = function () {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
};

let getPlayerChoice = function () {
  let playerChoice = prompt("Choose Rock, Paper or Scissors");
  while (!CHOICES.includes(playerChoice.toLowerCase())) {
    playerChoice = prompt(
      "Invalid choice, please choose Rock, Paper or Scissors"
    );
  }
  return playerChoice.toLocaleLowerCase();
};

let playRound = function (score) {
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();

  console.log(computerSelection);
  console.log(playerSelection);

  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          console.log("You draw!");
          break;
        case "paper":
          console.log("You lose! Paper beats Rock!");
          score--;
          break;
        case "scissors":
          console.log("You win! Rock beats Scissors!");
          score++;
          break;
      }
      break;
    case "paper":
      switch (computerSelection) {
        case "rock":
          console.log("You win! Paper beats Rock!");
          score++;
          break;
        case "paper":
          console.log("You draw!");
          break;
        case "scissors":
          console.log("You lose! Scissors beats Paper!");
          score--;
      }
      break;
    case "scissors":
      switch (computerSelection) {
        case "rock":
          console.log("You lose! Rock beats Scissors!");
          score--;
          break;
        case "paper":
          console.log("You win! Scissors beats Paper!");
          score++;
          break;
        case "scissors":
          console.log("You draw!");
          break;
      }
      break;
  }
  console.log(score);
  return score;
};

let playGame = function () {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    score = playRound(score);
  }
  if (score > 0) {
    alert("You won! Congratulations!");
  } else if (score < 0) {
    alert("You lost! Better luck next time");
    alert("You tied after 5 games! You better have another go!");
  }
  alert("Feel free to try again!");
  playGame();
};

playGame();
