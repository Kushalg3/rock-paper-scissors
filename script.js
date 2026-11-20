const container = document.querySelector("#container");
const roundResult = document.createElement("p");
const scoreAfterRound = document.createElement("p");
const result = document.createElement("p");
const displayHumanChoice = document.createElement("p");
const displayComputerChoice = document.createElement("p");

// Rock Paper Scissors Game (no gui)
let humanScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

// Function to take input frome user and match it with computer's choice
function playRound(humanChoice) {
  let computerChoice = getComputerChoice();

  if (humanChoice.toLowerCase() === "rock") {
    if (computerChoice === "paper") {
      computerScore++;

      displayHumanChoice.textContent = `Yours choice is : ${humanChoice.toLowerCase()}`;
      displayComputerChoice.textContent = `Computer's choice is : ${computerChoice}`;

      roundResult.textContent = "You loose! Paper beats rock.";

      scoreAfterRound.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`;
    } else if (computerChoice === "scissors") {
      humanScore++;

      displayHumanChoice.textContent = `Yours choice is : ${humanChoice.toLowerCase()}`;
      displayComputerChoice.textContent = `Computer's choice is : ${computerChoice}`;

      scoreAfterRound.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`;

      roundResult.textContent = "You win! Rock beats scissors.";
    } else {
      displayHumanChoice.textContent = `Yours choice is : ${humanChoice.toLowerCase()}`;
      displayComputerChoice.textContent = `Computer's choice is : ${computerChoice}`;

      scoreAfterRound.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`;

      roundResult.textContent = "It's a draw!";
    }
  } else if (humanChoice.toLowerCase() === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      displayHumanChoice.textContent = `Yours choice is : ${humanChoice.toLowerCase()}`;
      displayComputerChoice.textContent = `Computer's choice is : ${computerChoice}`;

      scoreAfterRound.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`;

      roundResult.textContent = "You win! Paper beats rock.";
    } else if (computerChoice === "scissors") {
      computerScore++;
      displayHumanChoice.textContent = `Yours choice is : ${humanChoice.toLowerCase()}`;
      displayComputerChoice.textContent = `Computer's choice is : ${computerChoice}`;

      scoreAfterRound.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`;

      roundResult.textContent = "You loose! Scissors beats paper.";
    } else {
      displayHumanChoice.textContent = `Yours choice is : ${humanChoice.toLowerCase()}`;
      displayComputerChoice.textContent = `Computer's choice is : ${computerChoice}`;

      scoreAfterRound.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`;

      roundResult.textContent = "It's a draw!";
    }
  } else if (humanChoice.toLowerCase() === "scissors") {
    if (computerChoice === "paper") {
      humanScore++;
      displayHumanChoice.textContent = `Yours choice is : ${humanChoice.toLowerCase()}`;
      displayComputerChoice.textContent = `Computer's choice is : ${computerChoice}`;

      scoreAfterRound.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`;

      roundResult.textContent = "You win! Scissors beats paper.";
    } else if (computerChoice === "rock") {
      computerScore++;
      displayHumanChoice.textContent = `Yours choice is : ${humanChoice.toLowerCase()}`;
      displayComputerChoice.textContent = `Computer's choice is : ${computerChoice}`;

      scoreAfterRound.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`;

      roundResult.textContent = "You loose! Rock beats scissors.";
    } else {
      displayHumanChoice.textContent = `Yours choice is : ${humanChoice.toLowerCase()}`;
      displayComputerChoice.textContent = `Computer's choice is : ${computerChoice}`;

      scoreAfterRound.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`;

      roundResult.textContent = "It's a draw!";
    }
  }

  container.appendChild(displayHumanChoice);
  container.appendChild(displayComputerChoice);
  container.appendChild(roundResult);
  container.appendChild(scoreAfterRound);
}

//event listeners for buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.textContent);
  });
});
