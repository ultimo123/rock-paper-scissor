let userScore = 0;
let computerScore = 0;
//Select
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissor_div = document.querySelector("#s");

//Convert s to word or p and r
function convert(letter) {
  if (letter === "r") return "Rock";
  if (letter === "s") return "Scissors";
  return "Paper";
}

//Win function
function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWorld = "user".fontsize(3).sup();
  const smallCompWorld = "comp".fontsize(3).sup();
  const green = document.getElementById(user);
  result_p.innerHTML = `${convert(user)} ${smallUserWorld} beats ${convert(
    computer,
  )} ${smallCompWorld}. You Win.`;
  green.classList.add("green-glow");
  setTimeout(() => {
    green.classList.remove("green-glow");
  }, 500);
}
//Lose function
function lose(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  const smallUserWorld = "user".fontsize(3).sup();
  const smallCompWorld = "comp".fontsize(3).sup();
  const red = document.getElementById(user);
  result_p.innerHTML = `${convert(user)} ${smallUserWorld} loses to ${convert(
    computer,
  )} ${smallUserWorld}. You Lose...`;
  red.classList.add("red-glow");
  setTimeout(() => {
    red.classList.remove("red-glow");
  }, 500);
}
//Draw Function
function draw(user, computer) {
  const smallUserWorld = "user".fontsize(3).sup();
  const smallCompWorld = "comp".fontsize(3).sup();
  const gray = document.getElementById(user);
  result_p.innerHTML = `${convert(
    user,
  )} ${smallUserWorld} is a draw to ${convert(
    computer,
  )} ${smallUserWorld}. DRAW...`;
  gray.classList.add("gray-glow");
  setTimeout(() => {
    gray.classList.remove("gray-glow");
  }, 500);
}

function main() {
  //Listening on the Event when we click
  rock_div.addEventListener("click", () => {
    game("r");
  });

  paper_div.addEventListener("click", () => {
    game("p");
  });
  scissor_div.addEventListener("click", () => {
    game("s");
  });
}

//Run the function
main();

//Define the function
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}
game("c");
