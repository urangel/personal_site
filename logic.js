const config = {
  apiKey: "AIzaSyCHsRpyLVhpJZyOpZ14DssEVo60alkM8po",
  authDomain: "ulisesproject-9cbd7.firebaseapp.com",
  databaseURL: "https://ulisesproject-9cbd7.firebaseio.com",
  projectId: "ulisesproject-9cbd7",
  storageBucket: "ulisesproject-9cbd7.appspot.com",
  messagingSenderId: "292343109983"
};
firebase.initializeApp(config);

const database = firebase.database();

let flipped = true;

$( document ).ready(function() {
  $("#message-submit").on("click", function(e){
    e.preventDefault();

    if($("#contact-name-input").val() === "" || $("#contact-email-input").val() === "" || $("#contact-message-input").val() === ""){
      $("#validation-message").show();
    }
    else{
      let message = {
        name: $("#contact-name-input").val(),
        email: $("#contact-email-input").val(),
        message: $("#contact-message-input").val()
      }
  
      firebase.database().ref().push(message);
  
      $("#validation-text").text("Message sent!");
      $("#validation-message").show();
      $("#contact-name-input").val("");
      $("#contact-email-input").val("");
      $("#contact-message-input").val("");
    }

    
  });

  $(".fa-arrow-alt-circle-right").on("click", function() {
    if (!flipped){
      $(this).closest(".flip-card-inner").css("transform", "rotateY(180deg)");
      flipped = !flipped;
    } else{
      $(this).closest(".flip-card-inner").css("transform", "rotateY(0deg)");
      flipped = !flipped;
    }
  });

  $(".collapse a[href^='#']").on("click", function(e) {
    e.preventDefault();
    let hash = this.hash;
 
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1000, function(){
      window.location.hash = hash;
    });
});

});