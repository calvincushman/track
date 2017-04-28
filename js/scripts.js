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

    $(".name").text(name);

    if(score > 6)
      $(".css").show();
    if(score < 11 || score > 5)
      $(".c#").show();
    if(score < 16 || score > 10)
      $(".ruby").show();
    if(score > 15)
      $(".php").show();





    event.preventDefault();
  });
});
