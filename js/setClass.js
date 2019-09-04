function setClass() {
  const skillsCard = document.querySelectorAll(".skills-card");
  let initFirst = 0;
  skillsCard[initFirst].classList.add("selected");

  skillsCard.forEach((skill, index) => {
    skill.addEventListener("click", function() {
      skillsCard[initFirst].classList.remove("selected");
      skillsCard[index].classList.add("selected");
      initFirst = index;

    });
  });
}

export default setClass
