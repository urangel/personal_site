let menu = document.getElementsByClassName("navbar-toggler");
let navCollapse = document.getElementsByClassName("navbar-collapse");
let button = document.getElementsByTagName("button");

window.onclick = function(e){
  // e.preventDefault();
  if(event.target == menu){
    menu.classList.add("collapsed");
    navCollapse.classList.remove("show");
  }
};

button.onclick = function(e){
  // e.preventDefault();
  console.log(event.target);
}

var logger = function(e) {
  console.log(event.target);
}

