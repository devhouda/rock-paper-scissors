function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      console.log("Computer Choice: rock");
      return "rock";
      break;

    case 1:
      console.log("Computer Choice: paper");
      return "paper";
      break;

    case 2:
      console.log("Computer Choice: scissors");
      return "scissors";
      break;
  }
}

function getHumanChoice() {
  let choice = prompt(
    "Welcome to the GAME! please enter rock, paper or scissors: ",
  ).toLowerCase();
  console.log("Human Choice:", choice);
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      console.log("You lose! Paper beats Rock");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log("You win! Rock beats Scissors");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log("You win! Paper beats Rock");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      console.log("You lose! Scissors beats Paper");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      console.log("You lose! Rock beats Scissors");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log("You win! Scissors beats Paper");
    } else if (humanChoice === computerChoice) {
      console.log("It's a tie.");
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    console.log("You won the game 🏆 you/computer:", humanScore, computerScore);
  } else if (humanScore < computerScore) {
    console.log(
      "You lost the game 😣 you/computer:",
      humanScore,
      computerScore,
    );
  } else {
    console.log("None of you won ✖ you/computer:", humanScore, computerScore);
  }
}

playGame();
