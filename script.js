"use strict";
let winner;
let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerChoice;

function getComputerChoice() {
  let computerCh = Number(Math.trunc(Math.random() * 3) + 1);
  console.log(computerCh);
  if (computerCh === 1) {
    document.querySelector(".q2").textContent = "✊";
    return "Rock";
  } else if (computerCh === 2) {
    document.querySelector(".q2").textContent = "✋";
    return "Paper";
  } else {
    document.querySelector(".q2").textContent = "✌";
    return "Scissors";
  }
}

function rockPaperScissors(computerChoice, playerChoice) {
  if (
    (computerChoice === "Rock" && playerChoice === "Paper") ||
    (computerChoice === "Paper" && playerChoice === "Scissors") ||
    (computerChoice === "Scissors" && playerChoice === "Rock")
  ) {
    winner = "Player";
    playerScore++;
    document.querySelector(".p1").textContent = "You won !!";
    document.querySelector(
      ".p2"
    ).textContent = `${playerChoice} beats ${computerChoice}`;
    document.querySelector(".score1").textContent = playerScore;
  } else if (
    (computerChoice === "Rock" && playerChoice === "Scissors") ||
    (computerChoice === "Paper" && playerChoice === "Rock") ||
    (computerChoice === "Scissors" && playerChoice === "Paper")
  ) {
    winner = "Computer";
    computerScore++;
    document.querySelector(".p1").textContent = "You lost !!";
    document.querySelector(
      ".p2"
    ).textContent = `${playerChoice} is beaten by ${computerChoice}`;

    document.querySelector(".score2").textContent = computerScore;
  } else if (
    (computerChoice === "Scissors" && playerChoice === "Scissors") ||
    (computerChoice === "Paper" && playerChoice === "Paper") ||
    (computerChoice === "Rock" && playerChoice === "Rock")
  ) {
    winner = "Draw";
    document.querySelector(".p1").textContent = "Its a tie !!";
    document.querySelector(
      ".p2"
    ).textContent = `${playerChoice} ties with ${computerChoice}`;
  }
  if (playerScore === 5) {
    document.querySelector(
      ".p1"
    ).textContent = `YOU WIN! MANKIND LIVES ANOTHER DAY`;
    document.querySelector(".p2").textContent = `PLAY AGAIN !!`;
  }

  if (computerScore === 5) {
    document.querySelector(
      ".p1"
    ).textContent = `YOU LOST... WHO WILL SAVE THE MANKIND NOW?`;
    document.querySelector(".p2").textContent = `PLAY AGAIN !!`;
  }
}

document.querySelector("#rock").addEventListener("click", function () {
  if (computerScore === 5) {
    return;
  } else if (playerScore === 5) {
    return;
  }
  playerChoice = "Rock";
  document.querySelector(".q1").textContent = "✊";
  computerChoice = getComputerChoice();
  rockPaperScissors(computerChoice, playerChoice);
});
document.querySelector("#paper").addEventListener("click", function () {
  if (computerScore === 5) {
    return;
  } else if (playerScore === 5) {
    return;
  }
  playerChoice = "Paper";
  document.querySelector(".q1").textContent = "✋";
  computerChoice = getComputerChoice();
  rockPaperScissors(computerChoice, playerChoice);
});
document.querySelector("#scissors").addEventListener("click", function () {
  if (computerScore === 5) {
    return;
  } else if (playerScore === 5) {
    return;
  }
  playerChoice = "Scissors";
  document.querySelector(".q1").textContent = "✌";
  computerChoice = getComputerChoice();
  rockPaperScissors(computerChoice, playerChoice);
});
