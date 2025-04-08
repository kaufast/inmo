const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
  direction: "vertical",
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 1.5,
});
/*
  // allow scrolling on overflow elements
  document
      .querySelector('.over--scroll')
    .setAttribute("onwheel", "event.stopPropagation()");
  */

function stopScroll(event) {
  // cancel scroll code
  lenis.stop();
}

function startScroll(event) {
  // start scroll code
  lenis.start();
}

var stopElements = document.querySelectorAll(".button-div.is-mob, .cta-row");
var startElements = document.querySelectorAll(
  ".button-div.is-mob.no-blur, .close-trigger, .button-div.is-close, .offer-trigger, .menu-row"
);

stopElements.forEach(function (element) {
  element.addEventListener("click", stopScroll);
});

startElements.forEach(function (element) {
  element.addEventListener("click", startScroll);
});

// stop page scrolling
//document.querySelector('.button-div.is-mob')
//	.onclick = function() {
//  	lenis.stop();
//}

// start page scrolling
//document.querySelector('.button-div.is-mob.no-blur')
//	.onclick = function() {
//  	lenis.start();
//}

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
