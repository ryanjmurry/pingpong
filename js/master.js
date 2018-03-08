//Business Logic
var countArray = [];
function pingpong (countTo, firstDiv, secondDiv) {
  for (i = 1; i <= countTo; i ++) {
    if (i % (firstDiv*secondDiv) === 0) {
      countArray.push("pingpong");
    } else if (i % firstDiv === 0) {
      countArray.push("ping");
    } else if (i % secondDiv === 0) {
      countArray.push("pong");
    } else {
      countArray.push(i);
    };
  };
};
//User Interface Logic
$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    debugger
    var countTo = parseInt($("input#countTo").val());
    var firstDiv = parseInt($("input#firstDiv").val());
    var secondDiv = parseInt($("input#secondDiv").val());
    pingpong(countTo, firstDiv, secondDiv);
    console.log(countArray);
  });
});