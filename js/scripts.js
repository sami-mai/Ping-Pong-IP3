// business logic








// user interface logic
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();

    $("#result").show();
  });
});
