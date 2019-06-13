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