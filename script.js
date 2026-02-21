const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");

noBtn.addEventListener("mouseover", () => {
  const newX = Math.random() * (questionContainer.offsetWidth - noBtn.offsetWidth);
  const newY = Math.random() * (questionContainer.offsetHeight - noBtn.offsetHeight);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener("click", () => {
  resultContainer.style.display = "block";
});