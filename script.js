//event listeners for buttons to call playRound
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.textContent);
  });
});

//targeting #container
const container = document.querySelector("#container");

//creating elements to append in the dom
const roundResult = document.createElement("p");
const scoreAfterRound = document.createElement("p");
const result = document.createElement("p");
const displayHumanChoice = document.createElement("p");
const displayComputerChoice = document.createElement("p");
const gameWinner = document.createElement("p");
const gameOver = document.createElement("h1");

// Rock Paper Scissors Game (no gui)
let humanScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

// Function to compare player's choice with computer's choice
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

  //checking if anyone reached to score 5 and disabling buttons if anyone reached
  if (humanScore === 5 || computerScore === 5) {
    gameOver.textContent = "GAME OVER";
    if (humanScore === 5) {
      gameWinner.textContent = "You won the game!";
    } else {
      gameWinner.textContent = "You lost the game!";
    }

    //insert game over text and winner declaration
    container.appendChild(gameOver);
    container.appendChild(gameWinner);

    //making buttons disabled
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}
