let counter = 1;

document.querySelectorAll(".experiences-list h4 .more_infos").forEach((info) => {
  const content = document.querySelector(`.toggle-${counter}`);
  info.addEventListener("click", (event) => {
    content.classList.toggle("show");
    event.currentTarget.classList.toggle("close")
  });
  counter += 1;
});

