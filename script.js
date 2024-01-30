const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const ruleBtn = document.querySelector(".rule_btn");
const ruleBox = document.querySelector(".rule-box");
const closeBtn = document.querySelector(".close_btn");
const choiceScreen = document.querySelector(".choice_screen");
const resultScreen = document.querySelector(".result-screen");
const playAgain = document.querySelector(".playAgain");
const user = document.querySelector("#user");
const computer = document.querySelector("#computer");
const userChoiceImg = document.querySelector("#userChoiceImage");
const computerChoiceImg = document.querySelector("#computerChoiceImage");

// Variables
let computerChoice;

const showResultScreen = () => {
  choiceScreen.style.display = "none";
  resultScreen.style.display = "block";
};

const randomComputerChoiceImg = () => {
  computerChoice = randomComputerChoice();
  computerChoiceImg.src = `images/${computerChoice}.png`;
};

const randomComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

rock.addEventListener("click", () => {
  userChoiceImg.src = "images/rock.png";
  randomComputerChoiceImg();
  showResultScreen();
});

scissors.addEventListener("click", () => {
  userChoiceImg.src = "images/scissors.png";
  randomComputerChoiceImg();
  showResultScreen();
});

paper.addEventListener("click", () => {
  userChoiceImg.src = "images/paper.png";
  randomComputerChoiceImg();
  showResultScreen();
});

playAgain.addEventListener("click", () => {
  choiceScreen.style.display = "block";
  resultScreen.style.display = "none";
});

// Rules
ruleBtn.addEventListener("click", () => {
  ruleBox.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  ruleBox.style.display = "none";
});
