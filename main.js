$(document).ready(function() {
  setTimeout(function() {
    $('#load').css("opacity", "0");
  }, 1000);
});

function goToLink(dest) {
  $('#load').css("opacity", "1");
  setTimeout(function() {
    window.location.href = dest;
  }, 100);
}
