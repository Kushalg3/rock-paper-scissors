// Rock Paper Scissors Game (no gui)
let humanScore = 0;
let computerScore = 0;
let round = 1;

// Function to get the computer's choice
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

// Function to take input frome user and match it with computer's choice
function playRound() {
  let humanChoice = prompt(
    "Choose one among rock, paper, scissors:",
    "rock",
  ).toLowerCase();
  let computerChoice = getComputerChoice();

  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      console.log(`Yours choice is : ${humanChoice}`);
      console.log(`Computer's choice is : ${computerChoice}`);
      console.log("You loose! Paper beats rock.");
      computerScore++;
    } else if (computerChoice === "scissors") {
      console.log(`Yours choice is : ${humanChoice}`);
      console.log(`Computer's choice is : ${computerChoice}`);

      console.log("You win! Rock beats scissors.");
      humanScore++;
    } else {
      console.log(`Yours choice is : ${humanChoice}`);
      console.log(`Computer's choice is : ${computerChoice}`);

      console.log("It's a draw!");
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log(`Yours choice is : ${humanChoice}`);
      console.log(`Computer's choice is : ${computerChoice}`);

      console.log("You win! Paper beats rock.");
      humanScore++;
    } else if (computerChoice === "scissors") {
      console.log(`Yours choice is : ${humanChoice}`);
      console.log(`Computer's choice is : ${computerChoice}`);

      console.log("You loose! Scissors beats paper.");
      computerScore++;
    } else {
      console.log(`Yours choice is : ${humanChoice}`);
      console.log(`Computer's choice is : ${computerChoice}`);

      console.log("It's a draw!");
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log(`Yours choice is : ${humanChoice}`);
      console.log(`Computer's choice is : ${computerChoice}`);

      console.log("You win! Scissors beats paper.");
      humanScore++;
    } else if (computerChoice === "rock") {
      console.log(`Yours choice is : ${humanChoice}`);
      console.log(`Computer's choice is : ${computerChoice}`);

      console.log("You loose! Rock beats scissors.");
      computerScore++;
    } else {
      console.log(`Yours choice is : ${humanChoice}`);
      console.log(`Computer's choice is : ${computerChoice}`);

      console.log("It's a draw!");
    }
  }
}

while (round <= 5) {
  playRound();
  if (round === 5) {
    console.log(
      humanScore > computerScore
        ? "You win the game."
        : "Computer win the game",
    );
    console.log("Thank you!");
  }
  round++;
}
