$(function() {
  $(".btn").click(function() { debugger;
    var name = $("input#name").val();
    var radioOne = $("input:radio[name=education]:checked").val();
    var radioTwo = $("input:radio[name=classes]:checked").val();
    var radioThree = $("input:radio[name=experience]:checked").val();
    var radioFour = $("input:radio[name=hobbies]:checked").val();
    var radioFive = $("input:radio[name=carreer]:checked").val();

    var one = parseInt(radioOne);
    var two = parseInt(radioTwo);
    var three = parseInt(radioThree);
    var four = parseInt(radioFour);
    var five = parseInt(radioFive);

    var score = (one+two+three+four+five)

    if(score < 6) {
      $(".css").show()
      $("#questions").hide();
    }

    else if (score < 11) {
      if (score > 5) {
      $(".java").show()
      $("#questions").hide();
      }
    }

    else if (score < 16) {
      if (score > 10) {
      $(".ruby").show()
      $("#questions").hide();
      }
    }

    else if (score > 15) {
      $(".php").show()
      $("#questions").hide();
    }

    $(".name").text(name);

    event.preventDefault();
  });
});
