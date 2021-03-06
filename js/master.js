//Business Logic
var countArray = [];
function pingpong (countTo, firstDiv, secondDiv) {
  for (i = 1; i <= countTo; i ++) {
    if (i % (firstDiv*secondDiv) === 0) {
      countArray.push("pingpong");
    } else if (i % firstDiv === 0 && i % secondDiv === 0) {
      countArray.push("ping and pong");
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
    if (countTo >= 1 && firstDiv >=1 && secondDiv >=1) {
      pingpong(countTo, firstDiv, secondDiv);
      $(".pingpongNum").text(firstDiv*secondDiv);
      $(".pingNum").text(firstDiv);
      $(".pongNum").text(secondDiv);
      $("form#numbers").hide();
      $("button#submit").hide();
      $(".result").show();
      $(".surprise").show();
      for (x = 0; x < countArray.length; x ++) {
        $(".resultList").append("<li>" + countArray[x] + "</li>");
      };
    } else {
      alert("Please enter a number greater than 0 for all three inputs");
    };
  });
    $("button#rematch").click(function() {
      location.reload();
    });
});
