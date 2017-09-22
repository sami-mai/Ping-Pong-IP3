// business logic
var output = [];

function play(number) {
  // count up to number
  for (var i = 1; i < number; i++) {
    output.push(i);
  }
  // Exceptions
  // if number is divisible by 15
  if (number % 3 == 0 && number % 5 == 0) {
    output.push("pingpong");
  }
  // if number is divisible by 5
  else if (number % 5 == 0) {
    output.push("pong");
  }
  // if number is divisible by 3
  else if (number % 3 == 0) {
    output.push("ping");
  } else {
    output.push(i);
  }
  // return output;
};

// user interface logic
$(document).ready(function() {
  $("#submit-button").click(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());
    output.forEach(function(element) {
      $("#result").append("<li>" + element + "</li>");
    });
    $(".result").show();
  });
});
