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


$( document ).ready(function() {
  $("#message-submit").on("click", function(e){
    e.preventDefault();

    let message = {
      name: $("#contact-name-input").val(),
      email: $("#contact-email-input").val(),
      message: $("#contact-message-input").val()
    }

    firebase.database().ref().push(message);


    $("#contact-name-input").val("");
    $("#contact-email-input").val("");
    $("#contact-message-input").val("");
  })
});