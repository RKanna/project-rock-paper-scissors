let containerTwo = document.getElementById("next-page-container");
containerTwo.style.display = "none";
let containerThree = document.getElementById("next-page-container2");
containerThree.style.display = "none";
let containerFour = document.getElementById("next-page-container3");
containerFour.style.display = "none";
let containerWinOrLose = document.getElementById("clickdisappear");
containerWinOrLose.style.display = "none";
let containerWinOrLose2 = document.getElementById("clickdisappear2");
containerWinOrLose2.style.display = "none";
document.getElementById("paper-img").addEventListener("click", function () {
  let containerOne = document.getElementById("gradient-section");
  let containerTwo = document.getElementById("next-page-container");
  containerOne.style.display = "none";
  let ruleSection = document.getElementById("rule-section");
  ruleSection.style.display = "none";
  containerTwo.style.display = "flex";
});

document.getElementById("scissor-img").addEventListener("click", function () {
  let containerOne = document.getElementById("gradient-section");
  let containerThree = document.getElementById("next-page-container2");
  containerOne.style.display = "none";
  let ruleSection = document.getElementById("rule-section");
  ruleSection.style.display = "none";
  containerThree.style.display = "flex";
});

document.getElementById("rock-img").addEventListener("click", function () {
  let containerOne = document.getElementById("gradient-section");
  let containerFour = document.getElementById("next-page-container3");
  containerOne.style.display = "none";
  let ruleSection = document.getElementById("rule-section");
  ruleSection.style.display = "none";
  containerFour.style.display = "flex";
});

document.getElementById("exit-overlay").addEventListener("click", function () {
  let containerOne = document.getElementById("gradient-section");
  containerOne.style.display = "flex";
  let overlayContainer = document.getElementById("overlay-container");
  overlayContainer.style.display = "none";
});
document.getElementById("rule-btn-main").addEventListener("click", function () {
  let OverlayContainerMain = document.getElementById("overlay-container");
  OverlayContainerMain.style.display = "flex";
});

function randomNumFunction() {
  let randomNumber = Math.ceil(Math.random() * 3);
  console.log(randomNumber);
}
let randomNum = randomNumFunction();
