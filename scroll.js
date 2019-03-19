var height = window.top.innerHeight;


window.addEventListener("wheel", function(event) {
  // console.log(event.pageY)
  if (event.deltaY > 0 && event.pageY > height){
    // console.log("let's bright")
    document.getElementById("second-card").style.animation="backcolor 2s forwards";
  }
  if (event.deltaY < 0) {
    // console.log("let's dark")
    document.getElementById("second-card").style.animation="backcolord 0.9s forwards";
  }
  })


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

function scrolledLeft(chart) {
  document.getElementById('circleRight').classList.remove('selector-choice')
  document.getElementById('circleLeft').classList.add('selector-choice')
  document.getElementById("my-skills").scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
  chart.data.labels = ['CSS', 'HTML', 'JavaScript', 'JQuery', 'Design'];
  console.log(chart.data.datasets[0].data[0])
  chart.data.datasets[0].data = [4, 5, 4, 1, 3];
  myRadarChart.update();
}

function scrollRight(chart) {
  document.getElementById('circleLeft').classList.remove('selector-choice')
  document.getElementById('circleRight').classList.add('selector-choice')
  document.getElementById("my-skills").scrollTo({
  top: 0,
  left: 1000,
  behavior: 'smooth'
});
  chart.data.labels = ['Ruby', 'Rails', 'Pyhon', 'Github', 'Matlab'];
  chart.data.datasets[0].data = [4, 3, 2, 4, 3];
  myRadarChart.update();
}

function ScrollHandler(pageId) {
  var page = document.getElementById(pageId);
  var pageStart = page.offsetTop;
  var pageJump = false;
  var viewStart;
  var duration = 1000;
  var scrolled = document.getElementById("scroll");

  function scrollToPage() {
    pageJump = true;

    // Calculate how far to scroll
    var startLocation = viewStart;
    var endLocation = pageStart;
    var distance = endLocation - startLocation;

    var runAnimation;

    // Set the animation variables to 0/undefined.
    var timeLapsed = 0;
    var percentage, position;

    var easing = function(progress) {
      return progress < 0.5
        ? 4 * progress * progress * progress
        : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1; // acceleration until halfway, then deceleration
    };

    function stopAnimationIfRequired(pos) {
      if (pos == endLocation) {
        cancelAnimationFrame(runAnimation);
        setTimeout(function() {
          pageJump = false;
        }, 500);
      }
    }

    var animate = function() {
      timeLapsed += 16;
      percentage = timeLapsed / duration;
      if (percentage > 1) {
        percentage = 1;
        position = endLocation;
      } else {
        position = startLocation + distance * easing(percentage);
      }
      scrolled.scrollTop = position;
      runAnimation = requestAnimationFrame(animate);
      stopAnimationIfRequired(position);
      // console.log("position=" + scrolled.scrollTop + "(" + percentage + ")");
    };
    // Loop the animation function
    runAnimation = requestAnimationFrame(animate);
  }

  window.addEventListener("wheel", function(event) {
    viewStart = scrolled.scrollTop;
    if (!pageJump) {
      var pageHeight = page.scrollHeight;
      var pageStopPortion = pageHeight / 2;
      var viewHeight = window.innerHeight;

      var viewEnd = viewStart + viewHeight;
      var pageStartPart = viewEnd - pageStart;
      var pageEndPart = pageStart + pageHeight - viewStart;

      var canJumpDown = pageStartPart >= 0;
      var stopJumpDown = pageStartPart > pageStopPortion;

      var canJumpUp = pageEndPart >= 0;
      var stopJumpUp = pageEndPart > pageStopPortion;

      var scrollingForward = event.deltaY > 0;
      if (
        (scrollingForward && canJumpDown && !stopJumpDown) ||
        (!scrollingForward && canJumpUp && !stopJumpUp)
      ) {
        event.preventDefault();
        scrollToPage();
      }
      false; //
    } else {
      event.preventDefault();
    }
  });
}
// new ScrollHandler("banner");
// new ScrollHandler("first-card");
// new ScrollHandler("second-card");

