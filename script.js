/*
function sendForm() {
var vorname = document.getElementById("vorname");
// let vorname = document.querySelector('#vorname');

var nachname = document.getElementById("nachname");
// let nachname = document.querySelector('#nachname');

var email = document.getElementById("email");
// let email = document.querySelector('#email');

var passwort = document.getElementById("passwort");

var url = "http://localhost:8080/https://myfridge-backend.herokuapp.com/api/registration";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

   var data = { 
    vorname: "NAME", 
    nachname: nachname.value, 
    email: "TEST@MAil.de",
    passwort: passwort.value };
  
  
  // Sending data with the request 
  var json = JSON.stringify(data);
  xhr.send(json);

}

*/
$("form[name=signup_form").submit(function(e) {

  var $form = $(this);
  var $error = $form.find(".error");
  var data = $form.serialize();

  $.ajax({
    url: "https://myfridge-backend.herokuapp.com/api/registration",
    type: "POST",
    data: data,
    dataType: "json",
    success: function(resp) {
      //window.location.href = "index.html";
      console.log(resp);
    },
    error: function(resp) {
      $error.text(resp.responseJSON.error).removeClass("error--hidden");
    }
  });

  e.preventDefault();
});

