const skillsCard = document.querySelectorAll(".skills-card");
let initFirst = 4;
skillsCard[initFirst].classList.add("selected");

skillsCard.forEach((skill, index) => {
  skill.addEventListener("click", function() {
    skillsCard[initFirst].classList.remove("selected");
    skillsCard[index].classList.add("selected");
    initFirst = index;

  });
});