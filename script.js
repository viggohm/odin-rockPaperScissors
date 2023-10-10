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
        break;
      case "scissors":
        console.log("You win! Rock beats Scissors!");
        break;
    }
    break;
  case "paper":
    switch (computerSelection) {
      case "rock":
        console.log("You win! Paper beats Rock!");
        break;
      case "paper":
        console.log("You draw!");
        break;
      case "scissors":
        console.log("You lose! Scissors beats Paper!");
    }
    break;
  case "scissors":
    switch (computerSelection) {
      case "rock":
        console.log("You lose! Rock beats Scissors!");
        break;
      case "paper":
        console.log("You win! Scissors beats Paper!");
        break;
      case "scissors":
        console.log("You draw!");
        break;
    }
    break;
}
