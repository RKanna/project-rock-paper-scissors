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
let elementScissors = document.getElementById("element-scissors");
let elementRock = document.getElementById("element-rock");
let elementPaper = document.getElementById("element-paper");
let elementScissors2 = document.getElementById("element-scissors2");
let elementRock2 = document.getElementById("element-rock2");
let elementPaper2 = document.getElementById("element-paper2");
let elementScissors3 = document.getElementById("element-scissors3");
let elementRock3 = document.getElementById("element-rock3");
let elementPaper3 = document.getElementById("element-paper3");

let columnTwo = document.getElementById("column-two");
columnTwo.style.display = "flex";

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

let paperImg = document.getElementById("paper-img");
let removeEle = document.getElementById("remove-element-btn");
removeEle.style.display = "none";
let removeEle2 = document.getElementById("remove-element-btn2");
removeEle2.style.display = "none";
let removeEle3 = document.getElementById("remove-element-btn3");
removeEle3.style.display = "none";

document.getElementById("paper-img").addEventListener("click", function () {
  let containerOne = document.getElementById("gradient-section");
  let containerTwo = document.getElementById("next-page-container");
  containerOne.style.display = "none";
  let ruleSection = document.getElementById("rule-section");
  ruleSection.style.display = "none";
  containerTwo.style.display = "flex";
  let randomNum = Math.ceil(Math.random() * 3);
  console.log(randomNum);
  if (randomNum === 1) {
    elementPaper.style.display = "flex";
    elementScissors.style.display = "none";
    elementRock.style.display = "none";
  } else if (randomNum === 2) {
    elementPaper.style.display = "none";
    elementScissors.style.display = "flex";
    elementRock.style.display = "none";
  } else if (randomNum === 3) {
    elementPaper.style.display = "none";
    elementScissors.style.display = "none";
    elementRock.style.display = "flex";
  }
});
let btnPaper = document.getElementById("element-paper");
btnPaper.style.display = "flex";
document.getElementById("scissor-img").addEventListener("click", function () {
  let containerOne = document.getElementById("gradient-section");
  let containerAnother = document.getElementById("next-page-container2");
  containerOne.style.display = "none";
  let ruleSection = document.getElementById("rule-section");
  ruleSection.style.display = "none";
  containerAnother.style.display = "flex";
  let randomNum = Math.ceil(Math.random() * 3);
  console.log(randomNum);
  if (randomNum === 1) {
    elementPaper2.style.display = "flex";
    elementScissors2.style.display = "none";
    elementRock2.style.display = "none";
  } else if (randomNum === 2) {
    elementPaper2.style.display = "none";
    elementScissors2.style.display = "flex";
    elementRock2.style.display = "none";
  } else if (randomNum === 3) {
    elementPaper2.style.display = "none";
    elementScissors2.style.display = "none";
    elementRock2.style.display = "flex";
  }
});

document.getElementById("rock-img").addEventListener("click", function () {
  let containerOne = document.getElementById("gradient-section");
  let containerLayerThree = document.getElementById("next-page-container3");
  containerOne.style.display = "none";
  let ruleSection = document.getElementById("rule-section");
  ruleSection.style.display = "none";
  containerLayerThree.style.display = "flex";
  let randomNum = Math.ceil(Math.random() * 3);
  console.log(randomNum);
  if (randomNum === 1) {
    elementPaper3.style.display = "flex";
    elementScissors3.style.display = "none";
    elementRock3.style.display = "none";
  } else if (randomNum === 2) {
    elementPaper3.style.display = "none";
    elementScissors3.style.display = "flex";
    elementRock3.style.display = "none";
  } else if (randomNum === 3) {
    elementPaper3.style.display = "none";
    elementScissors3.style.display = "none";
    elementRock3.style.display = "flex";
  }
});
function homePageFunction() {
  let containerOne = document.getElementById("gradient-section");
  containerOne.style.display = "flex";
  let containerTwo = document.getElementById("next-page-container");
  containerTwo.style.display = "none";
  let containerThree = document.getElementById("next-page-container2");
  containerThree.style.display = "none";
  let containerFour = document.getElementById("next-page-container3");
  containerFour.style.display = "none";
  let ruleSection = document.getElementById("rule-section");
  ruleSection.style.display = "flex";
}
