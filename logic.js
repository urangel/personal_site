let blurb = document.getElementById("blurb");
let scrollButton = document.getElementById("scroll-button");
let portfolio = document.getElementById("portfolio");

window.onload = () => {
  blurb.classList.add("appear");
  blurb.style.opacity = "1";
}

function scroll() {
  portfolio.scrollIntoView();
}
scrollButton.onclick = () => {
  scroll();
};

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