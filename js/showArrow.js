const skillsItems = document.querySelector(".item-list");
const skillsWrapper = document.querySelector(".item-wrapper");
const arrowRight = document.querySelector(".arrow-right");
// const arrowLeft = document.querySelector(".arrow-left");

skillsItems.addEventListener("mouseover", function() {
  arrowRight.classList.add("visible");
});

skillsItems.addEventListener("mouseout", function() {
  arrowRight.classList.remove("visible");
});

const cornerButton = document.querySelector(".corner-bottom-button");
const firstCard = document.querySelector(".first-card");
const moreInfos = document.querySelector(".more-infos");

cornerButton.addEventListener("click", function() {
  firstCard.classList.toggle("slide");
  moreInfos.classList.toggle("slide");
  cornerButton.classList.toggle("slide");
});

