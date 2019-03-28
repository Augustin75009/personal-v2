var height = window.top.innerHeight;
const parallaxScroll = document.querySelector(".name");
const parallaxScrollBis = document.querySelector(".astro");
const parallaxScrollBisBis = document.querySelector(".astro2");

window.addEventListener("scroll", function() {
  const offset = window.pageYOffset;
  const offsetBis = window.pageYOffset - height;
  parallaxScroll.style.backgroundPositionY = offset * 0.8 + "px";
  parallaxScroll.style.opacity = 1 - (offset / 400);
  parallaxScrollBisBis.style.backgroundPositionY = offsetBis * 0.65 + height + "px";
  parallaxScrollBis.style.backgroundPositionY = offsetBis * 0.65  + "px";
});
