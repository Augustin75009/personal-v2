function scroll() {
  var height = window.top.innerHeight;

  function initScrollBar() {

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
}

export default scroll
