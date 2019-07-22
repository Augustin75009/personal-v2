var height = window.top.innerHeight;


// window.addEventListener("scroll", function() {
//   if (disableScroll == true) {
//     if ((window.scrollY) > 2 * (height - 50)) {
//       document.getElementById("second-card").classList.add("addOpacity");
//       document.getElementById("second-card").classList.remove("RemoveOpacity");
//       document.querySelector(".item-wrapper").classList.add("addClass");
//       document.querySelector(".item-wrapper").classList.remove("removeClass");
//     }
//     if ((window.scrollY) < 2 * (height - 50)) {
//       document.getElementById("second-card").classList.remove("addOpacity");
//       document.getElementById("second-card").classList.add("RemoveOpacity");
//       document.querySelector(".item-wrapper").classList.remove("addClass");
//       document.querySelector(".item-wrapper").classList.add("removeClass");
//     }
//   }
// });

// window.addEventListener("scroll", function() {
//   if (window.scrollY > (height - 50)) {
//     document.querySelector(".progress-div-second").style.background = "rgba(255, 255, 255, 0.3)";
//   }
//   if (window.scrollY > 2 * (height - 50)) {
//     document.querySelector(".progress-div-third").style.background = "rgba(255, 255, 255, 0.3)";
//   }
//   if (window.scrollY < (height - 50)) {
//     document.querySelector(".progress-div-second").style.background = "rgba(255, 255, 255, 0.3)";
//   }
//   if (window.scrollY < 2 * (height - 50)) {
//     document.querySelector(".progress-div-third").style.background = "rgba(255, 255, 255, 0.3)";
//   }
// });

const initScrollBar = () => {

document.addEventListener('scroll', (event) => {
    const sh = document.body.scrollHeight;
    const ih = self.innerHeight
    const w = window.innerWidth
    const blueScroll = document.querySelector(".blue-scroll");
    const greyScroll = document.querySelector(".grey-scroll");
    const y = window.pageYOffset;
    const h = (y/(sh-ih))*(100-120/w*100) + 120/w*100;
    const hs = h.toString() + '%';
    const hg = 100 - h;
    const hgs = hg.toString() + '%';
    blueScroll.style.width = hs;
    greyScroll.style.width = hgs;

  });
};

initScrollBar();


document.querySelector('.progress-div-first').addEventListener('click', () => {
  document.getElementById('banner').scrollIntoView({ behavior: "smooth" });
});

document.querySelector('.progress-div-second').addEventListener('click', () => {
  document.getElementById('first-card').scrollIntoView({ behavior: "smooth" });
});

document.querySelector('.progress-div-third').addEventListener('click', () => {
  document.getElementById('second-card').scrollIntoView({ behavior: "smooth" });
});

// for phone ------------------------

document.querySelector('.link.A').addEventListener('click', () => {
  document.getElementById('banner').scrollIntoView();
});
document.querySelector('.link.B').addEventListener('click', () => {
  document.getElementById('first-card').scrollIntoView();
});
document.querySelector('.link.C').addEventListener('click', () => {
  document.getElementById('second-card').scrollIntoView();
});
document.querySelector('.link.D').addEventListener('click', () => {
  document.getElementById('banner').scrollIntoView();
});
