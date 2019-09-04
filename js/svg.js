import anime from './anime'

const initSVG = (svgGus) => {
  const svgDrop = ' <svg class="svg-drop" width="200" height="100" viewBox="0 0 371 109" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M31.7012 63.4041C29.7832 63.4041 27.8613 62.6736 26.3965 61.2087L2.19727 37.0056C-0.732422 34.0798 -0.732422 29.3298 2.19727 26.4001L26.3965 2.20093C29.3262 -0.72876 34.0762 -0.72876 37.0059 2.20093C39.9355 5.13062 39.9355 9.87671 37.0059 12.8064L18.1074 31.7048L37.0059 50.6033C39.9355 53.533 39.9355 58.2791 37.0059 61.2087C35.541 62.6736 33.6191 63.4041 31.7012 63.4041Z" fill="#838383"/> <path d="M89.5605 63.4041C87.6426 63.4041 85.7207 62.6736 84.2559 61.2087C81.3262 58.2791 81.3262 53.5291 84.2559 50.6033L103.154 31.7048L84.2559 12.8064C81.3262 9.87671 81.3262 5.12671 84.2559 2.20093C87.1855 -0.72876 91.9355 -0.72876 94.8652 2.20093L119.064 26.4001C121.994 29.3298 121.994 34.0798 119.064 37.0056L94.8652 61.2087C93.4004 62.6736 91.4785 63.4041 89.5605 63.4041Z" fill="#838383"/> <path d="M51.9476 63.408C51.0335 63.408 50.1078 63.2401 49.2054 62.8846C45.3499 61.3729 43.4515 57.0174 44.9671 53.162L63.9828 4.75961C65.4984 0.908047 69.8538 -0.994297 73.7054 0.521328C77.5609 2.03695 79.4593 6.39242 77.9437 10.2479L58.9281 58.6463C57.7679 61.6034 54.9398 63.408 51.9476 63.408Z" fill="#838383"/> <path d="M63.8691 108.693H11.8691C7.72852 108.693 4.36914 105.334 4.36914 101.193C4.36914 97.0486 7.72852 93.6931 11.8691 93.6931H63.8691C68.0137 93.6931 71.3691 97.0486 71.3691 101.193C71.3691 105.334 68.0137 108.693 63.8691 108.693Z" fill="#838383"/> <path d="M183.643 108.693H92.2168C88.0762 108.693 84.7168 105.334 84.7168 101.193C84.7168 97.0486 88.0762 93.6931 92.2168 93.6931H183.643C187.787 93.6931 191.143 97.0486 191.143 101.193C191.143 105.334 187.787 108.693 183.643 108.693Z" fill="#838383"/> <path d="M332.285 109H318.793C314.652 109 311.293 105.645 311.293 101.5C311.293 97.3594 314.652 94 318.793 94H332.285C336.426 94 339.785 97.3594 339.785 101.5C339.785 105.645 336.426 109 332.285 109Z" fill="#838383"/> <path d="M290.758 109H224.5C220.355 109 217 105.645 217 101.5C217 97.3594 220.355 94 224.5 94H290.758C294.902 94 298.258 97.3594 298.258 101.5C298.258 105.645 294.898 109 290.758 109Z" fill="#838383"/> <path d="M170.264 37.6736H143.611C139.467 37.6736 136.111 34.3181 136.111 30.1736C136.111 26.033 139.467 22.6736 143.611 22.6736H170.264C174.408 22.6736 177.764 26.033 177.764 30.1736C177.764 34.3181 174.408 37.6736 170.264 37.6736Z" fill="#838383"/> <path d="M362.729 37.6736H200.111C195.971 37.6736 192.611 34.3181 192.611 30.1736C192.611 26.033 195.971 22.6736 200.111 22.6736H362.729C366.869 22.6736 370.229 26.033 370.229 30.1736C370.229 34.3181 366.869 37.6736 362.729 37.6736Z" fill="#838383"/> <path d="M338.025 71.6384H272.158C268.014 71.6384 264.658 68.283 264.658 64.1384C264.658 59.9978 268.014 56.6384 272.158 56.6384H338.025C342.17 56.6384 345.525 59.9978 345.525 64.1384C345.525 68.283 342.17 71.6384 338.025 71.6384Z" fill="#838383"/> <path d="M247.455 71.6384H224.811C220.67 71.6384 217.311 68.283 217.311 64.1384C217.311 59.9978 220.67 56.6384 224.811 56.6384H247.455C251.6 56.6384 254.955 59.9978 254.955 64.1384C254.955 68.283 251.6 71.6384 247.455 71.6384Z" fill="#838383"/> <path d="M199.084 71.6384H143.607C139.467 71.6384 136.107 68.283 136.107 64.1384C136.107 59.9978 139.467 56.6384 143.607 56.6384H199.084C203.225 56.6384 206.584 59.9978 206.584 64.1384C206.584 68.283 203.225 71.6384 199.084 71.6384Z" fill="#838383"/> </svg>'
  const svgAnimated = '<svg class="winning-img" style="z-index:10" width="100" height="100" viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg" style=""><mask id="path-1-inside-1" fill="white"><path width="156" height="58" d="M 192,423 L 328,423 A 10,10,0,0,1,338,433 L 338,471 A 10,10,0,0,1,328,481 L 192,481 A 10,10,0,0,1,182,471 L 182,433 A 10,10,0,0,1,192,423" class="XdHbWnmy_0"></path></mask><path width="156" height="58" stroke="#222831" stroke-width="28" mask="url(#path-1-inside-1)" d="M 192,423 L 328,423 A 10,10,0,0,1,338,433 L 338,471 A 10,10,0,0,1,328,481 L 192,481 A 10,10,0,0,1,182,471 L 182,433 A 10,10,0,0,1,192,423" class="XdHbWnmy_1"></path><mask id="path-2-inside-2" fill="white"><path d="M131.016 493.899C131.016 479.54 142.656 467.899 157.016 467.899H362.984C377.344 467.899 388.984 479.54 388.984 493.899V510C388.984 515.522 384.507 520 378.984 520H141.016C135.493 520 131.016 515.522 131.016 510V493.899Z" class="XdHbWnmy_2"></path></mask><path d="M131.016 493.899C131.016 479.54 142.656 467.899 157.016 467.899H362.984C377.344 467.899 388.984 479.54 388.984 493.899V510C388.984 515.522 384.507 520 378.984 520H141.016C135.493 520 131.016 515.522 131.016 510V493.899Z" stroke="#222831" stroke-width="28" mask="url(#path-2-inside-2)" class="XdHbWnmy_3"></path><path d="M67.6719 48.5414C67.6719 56.4831 61.1195 63.0829 52.8359 63.0829C44.5524 63.0829 38 56.4831 38 48.5414C38 40.5997 44.5524 34 52.8359 34C61.1195 34 67.6719 40.5997 67.6719 48.5414Z" stroke="#222831" stroke-width="14" class="XdHbWnmy_4"></path><path d="M125.672 48.5414C125.672 56.4831 119.12 63.0829 110.836 63.0829C102.552 63.0829 96 56.4831 96 48.5414C96 40.5997 102.552 34 110.836 34C119.12 34 125.672 40.5997 125.672 48.5414Z" stroke="#222831" stroke-width="14" class="XdHbWnmy_5"></path><path d="M183.672 48.5414C183.672 56.4831 177.12 63.0829 168.836 63.0829C160.552 63.0829 154 56.4831 154 48.5414C154 40.5997 160.552 34 168.836 34C177.12 34 183.672 40.5997 183.672 48.5414Z" stroke="#222831" stroke-width="14" class="XdHbWnmy_6"></path><path width="506" height="423" stroke="#222831" stroke-width="14" d="M 25,7 L 495,7 A 18,18,0,0,1,513,25 L 513,412 A 18,18,0,0,1,495,430 L 25,430 A 18,18,0,0,1,7,412 L 7,25 A 18,18,0,0,1,25,7" class="XdHbWnmy_7"></path><path d="M4 365.695H516V409.826C516 418.663 508.837 425.826 500 425.826H20C11.1635 425.826 4 418.663 4 409.826V365.695Z" stroke="#222831" stroke-width="8" class="XdHbWnmy_8"></path><path d="M7 366H513V411C513 421.493 504.493 430 494 430H26C15.5066 430 7 421.493 7 411V366Z" stroke="#222831" stroke-width="14" class="XdHbWnmy_9"></path><path d="M26 7H494C504.493 7 513 15.5066 513 26V90.1869H7V26C7 15.5066 15.5066 7 26 7Z" stroke="#222831" stroke-width="14" class="XdHbWnmy_10"></path><style data-made-with="vivus-instant">.XdHbWnmy_0{stroke-dasharray:411 413;stroke-dashoffset:412;animation:XdHbWnmy_draw 40ms ease-in 0ms forwards;}.XdHbWnmy_1{stroke-dasharray:411 413;stroke-dashoffset:412;animation:XdHbWnmy_draw 40ms ease-in 40ms forwards;}.XdHbWnmy_2{stroke-dasharray:590 592;stroke-dashoffset:591;animation:XdHbWnmy_draw 58ms ease-in 81ms forwards;}.XdHbWnmy_3{stroke-dasharray:590 592;stroke-dashoffset:591;animation:XdHbWnmy_draw 58ms ease-in 140ms forwards;}.XdHbWnmy_4{stroke-dasharray:93 95;stroke-dashoffset:94;animation:XdHbWnmy_draw 9ms ease-in 199ms forwards;}.XdHbWnmy_5{stroke-dasharray:93 95;stroke-dashoffset:94;animation:XdHbWnmy_draw 9ms ease-in 208ms forwards;}.XdHbWnmy_6{stroke-dasharray:93 95;stroke-dashoffset:94;animation:XdHbWnmy_draw 9ms ease-in 218ms forwards;}.XdHbWnmy_7{stroke-dasharray:1828 1830;stroke-dashoffset:1829;animation:XdHbWnmy_draw 181ms ease-in 227ms forwards;}.XdHbWnmy_8{stroke-dasharray:1131 1133;stroke-dashoffset:1132;animation:XdHbWnmy_draw 112ms ease-in 409ms forwards;}.XdHbWnmy_9{stroke-dasharray:1124 1126;stroke-dashoffset:1125;animation:XdHbWnmy_draw 111ms ease-in 522ms forwards;}.XdHbWnmy_10{stroke-dasharray:1163 1165;stroke-dashoffset:1164;animation:XdHbWnmy_draw 115ms ease-in 634ms forwards;}@keyframes XdHbWnmy_draw{100%{stroke-dashoffset:0;}}@keyframes XdHbWnmy_fade{0%{stroke-opacity:1;}91.91919191919192%{stroke-opacity:1;}100%{stroke-opacity:0;}}</style></svg>'
  let counter = null;
  document.querySelector('.banner').insertAdjacentHTML('afterbegin', svgGus);

  document.querySelector('.macbook').addEventListener('click', (event) => {
    // console.log("hello")
    document.querySelector('.banner').insertAdjacentHTML('afterbegin', svgDrop);
  })

  document.addEventListener('scroll', (event) => {
      const b = document.querySelector('.first-card').scrollHeight;
      const c = document.querySelector('.dev-profil').scrollHeight;
      const arrow = document.querySelector('.arrow-up')
      const ih = self.innerHeight;
      const y = window.pageYOffset;
      const h = b + c + ((ih-b)/2);

      if (y > 100) {
        arrow.classList.remove('hidden')
      } else {
        arrow.classList.add('hidden')
      }


      if ((h < y) & counter == null) {
        document.querySelector('#win1').insertAdjacentHTML('afterbegin', svgAnimated);
        document.querySelector('#win2').insertAdjacentHTML('afterbegin', svgAnimated);
        document.querySelector('#win3').insertAdjacentHTML('afterbegin', svgAnimated);
        counter = 1
      }
    });

const glassRight1 = "904"
const glassLeft1 = "925"

// const glassLeft1
// const glassLeft2
const darkMode = document.getElementById("svg");

let toggle = false;

let timeline = anime.timeline({
  duration : 30,
  easing : "linear",
  // easing: 'spring(0, 80, 40, 5)',
  loop: true,
  autoplay: false
  // direction: "alternate"
});

timeline.add({
  targets: ".first",
  // rotate: 1,
  translateX: -4,
  translateY: -5,
  rotate: -0.4
})
.add({
  targets: "#paint4_linear",
  y2 : [{
    value : glassRight1
  }]
}).add({
  targets: "#paint5_linear",
  y2 : [{
    value : glassLeft1
  }]
})

document.querySelector('.macbook').onmousedown = timeline.play;
document.querySelector('.macbook').onmouseup = timeline.pause;


};

export default initSVG
