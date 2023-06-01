let containerTwo = document.getElementById("next-page-container");
containerTwo.style.display = "none";
let containerThree = document.getElementById("next-page-container2");
containerThree.style.display = "none";

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
