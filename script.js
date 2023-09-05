function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return "Tied!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "Computer";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "Player";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "Player";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "Computer";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "Computer";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "Player";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Enter your choice Rock, Paper or Scissors: "
    );
    const computerSelection = getComputerChoice();
    if (playRound(playerSelection, computerSelection) == "Player") {
      ++playerScore;
      console.log("Player !");
    } else if (playRound(playerSelection, computerSelection) == "Computer") {
      ++computerScore;
      console.log("Computer !");
    } else {
      console.log("Tied !");
    }
  }
  console.log("=======================================");
  if (playerScore > computerScore) {
    console.log(`Player won with score ${playerScore} to ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`Player lost with score ${playerScore} to ${computerScore}`);
  } else {
    console.log(`Tied game !`);
  }
}

game();
