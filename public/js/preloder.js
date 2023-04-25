const left = document.getElementById("left-side");
const right = document.getElementById("right-side");
const line = document.getElementById("line");
const preloder = document.getElementById("preloder");

const leftSlider = "-100%"
const rightSlider = "100%"


setTimeout(() => {
  anime({
    targets: line,
    duration:1000,
    height:550,
    easing: 'easeInOutQuad',
  });
},0);
setTimeout(() => {
  line.style.opacity = 0
}, 1100);  
  
setTimeout(() => {
  anime({
    targets: left,
    duration:2000,
    translateX: leftSlider,
    easing: 'easeInOutQuad',
  });
  anime({
    targets: right,
    duration:2000,
    translateX: rightSlider,
    easing: 'easeInOutQuad',
  });
}, 1400);
  setTimeout(() => {
preloder.style.zIndex = -10
}, 4000);

