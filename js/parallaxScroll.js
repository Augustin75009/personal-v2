function parallaxScroll() {
  var height = window.top.innerHeight;
  const parallaxScroll = document.querySelector(".name");

  window.addEventListener("scroll", function() {
    const offset = window.pageYOffset;
    const offsetBis = window.pageYOffset - height;
    parallaxScroll.style.backgroundPositionY = offset * 0.8 + "px";
    parallaxScroll.style.opacity = 1 - (offset / 300);
  });
}

export default parallaxScroll
