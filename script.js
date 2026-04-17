const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const body = document.querySelector("body");
const displayResults = document.createElement("div");
displayResults.textContent = "";

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      console.log("Computer Choice: rock");
      displayResults.textContent += "Computer Choice: rock, ";
      return "rock";
      break;

    case 1:
      console.log("Computer Choice: paper");
      displayResults.textContent += "Computer Choice: paper, ";
      return "paper";
      break;

    case 2:
      console.log("Computer Choice: scissors");
      displayResults.textContent += "Computer Choice: scissors, ";
      return "scissors";
      break;
  }
}

function getHumanChoice(choice) {
  humanChoice = choice.toLowerCase();
  console.log("Human Choice:", humanChoice);
  displayResults.textContent += `Human Choice: ${humanChoice}, `;
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playGame(humanChoice) {
  displayResults.textContent = "";
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      console.log("You lose! Paper beats Rock");
      displayResults.textContent += "You lose! Paper beats Rock";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log("You win! Rock beats Scissors");
      displayResults.textContent += "You win! Rock beats Scissors";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log("You win! Paper beats Rock");
      displayResults.textContent += "You win! Paper beats Rock";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      console.log("You lose! Scissors beats Paper");
      displayResults.textContent += "You lose! Scissors beats Paper";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      console.log("You lose! Rock beats Scissors");
      displayResults.textContent += "You lose! Rock beats Scissors";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log("You win! Scissors beats Paper");
      displayResults.textContent += "You win! Scissors beats Paper";
    } else if (humanChoice === computerChoice) {
      console.log("It's a tie.");
      displayResults.textContent += "It's a tie.";
    }
  }

  playRound(getHumanChoice(humanChoice), getComputerChoice());

  if (humanScore === 5) {
    console.log("You won the game 🏆 you/computer:", humanScore, computerScore);
    displayResults.textContent = `You won the game 🏆 you/computer: ${humanScore} ${computerScore}`;
    return;
  } else if (computerScore === 5) {
    console.log(
      "You lost the game 😣 you/computer:",
      humanScore,
      computerScore,
    );
    displayResults.textContent = `You lost the game 😣 you/computer: ${humanScore} ${computerScore}`;
    return;
  }

  if (humanScore === 5 || computerScore === 5) {
    return;
  }
}

rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));

body.appendChild(displayResults);
