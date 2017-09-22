// business logic
var number = parseInt($("input#year").val());

function count() {

};

function exceptions(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "pingpong";
  } else if (number % 5 === 0) {
    return "pong";
  } else if (number % 3 === 0) {
    return "ping";
  } else {
    return number;
  }
};







// user interface logic
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();

    $("#result").show();
  });
});
