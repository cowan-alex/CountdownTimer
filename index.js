var actualTimer = $('.actualTimer');
var countdownDate = new Date("July 19, 2019 09:00:00").getTime();


var oneSecond = setInterval(function() {

  var now = new Date().getTime();
  var distance = countdownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

console.log(days, hours, minutes, seconds);
  $("#actualTimer").text(days + "d " + hours + "h " + minutes + "m " + seconds + "s");

  if (distance < 0) {
    clearInterval(x);
    document.getElementById(".actualTimer").innerHTML = "EXPIRED";
  }
}, 1000);
