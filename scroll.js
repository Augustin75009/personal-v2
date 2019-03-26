var height = window.top.innerHeight;

window.addEventListener("scroll", function() {
  // console.log(window.scrollY);
  // console.log(height);
  if ((window.scrollY) > 2 * (height - 50)) {
    // console.log("let's bright")
    document.getElementById("second-card").classList.add("addOpacity");
    document.getElementById("second-card").classList.remove("RemoveOpacity");
    document.querySelector(".item-wrapper").classList.add("addClass");
    document.querySelector(".item-wrapper").classList.remove("removeClass");
  }
  if ((window.scrollY) < 2 * (height - 50)) {
    // console.log("let's dark")
    document.getElementById("second-card").classList.remove("addOpacity");
    document.getElementById("second-card").classList.add("RemoveOpacity");
    document.querySelector(".item-wrapper").classList.remove("addClass");
    document.querySelector(".item-wrapper").classList.add("removeClass");
  }
});


window.addEventListener("scroll", function() {
  if (window.scrollY > (height - 50)) {
    document.querySelector(".progress-div-second").style.background = "white";
  }
  if (window.scrollY > 2 * (height - 50)) {
    document.querySelector(".progress-div-third").style.background = "white";
  }
  if (window.scrollY < (height - 50)) {
    document.querySelector(".progress-div-second").style.background = "rgba(220, 220, 220, 1)";
  }
  if (window.scrollY < 2 * (height - 50)) {
    document.querySelector(".progress-div-third").style.background = "rgba(220, 220, 220, 1)";
  }
});

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
  // window.scrollBy(0, 100);
});


// function scrollUp() {
//   window.scrollBy({
//   top: -height,
//   left: 0,
//   behavior: 'smooth'
// });
//   // console.log("position=" + document.getElementById("second-card").scrollHeight);
// }

// function scrollDown() {
//   window.scrollBy({
//   top: window.innerHeight,
//   left: 0,
//   behavior: 'smooth'
// });
//   // console.log("position=" + document.getElementById("second-card").offsetTop);
// }

// function scrolledLeft(chart) {
//   document.getElementById('circleRight').classList.remove('selector-choice')
//   document.getElementById('circleLeft').classList.add('selector-choice')
//   document.getElementById("my-skills").scrollTo({
//   top: 0,
//   left: 0,
//   behavior: 'smooth'
// });
//   chart.data.labels = ['CSS', 'HTML', 'JavaScript', 'JQuery', 'Design'];
//   console.log(chart.data.datasets[0].data[0])
//   chart.data.datasets[0].data = [4, 5, 4, 1, 3];
//   myRadarChart.update();
// }

// function scrollRight(chart) {
//   document.getElementById('circleLeft').classList.remove('selector-choice')
//   document.getElementById('circleRight').classList.add('selector-choice')
//   document.getElementById("my-skills").scrollTo({
//   top: 0,
//   left: 1000,
//   behavior: 'smooth'
// });
//   chart.data.labels = ['Ruby', 'Rails', 'Pyhon', 'Github', 'Matlab'];
//   chart.data.datasets[0].data = [4, 3, 2, 4, 3];
//   myRadarChart.update();
// }

// function ScrollHandler(pageId) {
//   var page = document.getElementById(pageId);
//   var pageStart = page.offsetTop;
//   var pageJump = false;
//   var viewStart;
//   var duration = 1000;
//   var scrolled = document.getElementById("scroll");

//   function scrollToPage() {
//     pageJump = true;

//     // Calculate how far to scroll
//     var startLocation = viewStart;
//     var endLocation = pageStart;
//     var distance = endLocation - startLocation;

//     var runAnimation;

//     // Set the animation variables to 0/undefined.
//     var timeLapsed = 0;
//     var percentage, position;

//     var easing = function(progress) {
//       return progress < 0.5
//         ? 4 * progress * progress * progress
//         : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1; // acceleration until halfway, then deceleration
//     };

//     function stopAnimationIfRequired(pos) {
//       if (pos == endLocation) {
//         cancelAnimationFrame(runAnimation);
//         setTimeout(function() {
//           pageJump = false;
//         }, 500);
//       }
//     }

//     var animate = function() {
//       timeLapsed += 16;
//       percentage = timeLapsed / duration;
//       if (percentage > 1) {
//         percentage = 1;
//         position = endLocation;
//       } else {
//         position = startLocation + distance * easing(percentage);
//       }
//       scrolled.scrollTop = position;
//       runAnimation = requestAnimationFrame(animate);
//       stopAnimationIfRequired(position);
//       // console.log("position=" + scrolled.scrollTop + "(" + percentage + ")");
//     };
//     // Loop the animation function
//     runAnimation = requestAnimationFrame(animate);
//   }

//   window.addEventListener("wheel", function(event) {
//     viewStart = scrolled.scrollTop;
//     if (!pageJump) {
//       var pageHeight = page.scrollHeight;
//       var pageStopPortion = pageHeight / 2;
//       var viewHeight = window.innerHeight;

//       var viewEnd = viewStart + viewHeight;
//       var pageStartPart = viewEnd - pageStart;
//       var pageEndPart = pageStart + pageHeight - viewStart;

//       var canJumpDown = pageStartPart >= 0;
//       var stopJumpDown = pageStartPart > pageStopPortion;

//       var canJumpUp = pageEndPart >= 0;
//       var stopJumpUp = pageEndPart > pageStopPortion;

//       var scrollingForward = event.deltaY > 0;
//       if (
//         (scrollingForward && canJumpDown && !stopJumpDown) ||
//         (!scrollingForward && canJumpUp && !stopJumpUp)
//       ) {
//         event.preventDefault();
//         scrollToPage();
//       }
//       false; //
//     } else {
//       event.preventDefault();
//     }
//   });
// }
// new ScrollHandler("banner");
// new ScrollHandler("first-card");
// new ScrollHandler("second-card");

