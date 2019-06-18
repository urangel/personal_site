let blurb = document.getElementById("blurb");
let scrollButton = document.getElementById("scroll-button");
let portfolio = document.getElementById("portfolio");
//MAKES THE BLURB FADE IN AND FOCUS ON WINDOW LOAD
window.onload = () => {
  blurb.classList.add("appear");
  blurb.style.opacity = "1";
}
//BOUNCING HEXAGON MADE INTO SCROLL-BUTTON
function scroll() {
  portfolio.scrollIntoView();
}
scrollButton.onclick = () => {
  scroll();
};
//FUNCTION FOR CARDS TO APPEAR AND RESIZE WHEN SCROLLED TO
function animate() {
  let tarjetas, windowHeight;
  function init() {
    tarjetas = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (let i = 0; i < tarjetas.length; i++) {
      let positionFromTop = tarjetas[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        tarjetas[i].className = tarjetas[i].className.replace('hidden','fade-in-element');
      }
    }
  }
  return {
    init: init
  };
};
animate().init();