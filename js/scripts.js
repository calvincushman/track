$(function() {
  $("#questions").submit(function(event) {
    var name = $("input#name").val();
    var radioOne = $(parseInt("input:radio[name=education]:checked")).val();
    var radioTwo = $(parseInt("input:radio[name=classes]:checked")).val();
    var radioThree = $(parseInt("input:radio[name=experience]:checked")).val();
    var radioFour = $(parseInt("input:radio[name=hobbies]:checked")).val();
    var radioFive = $(parseInt("input:radio[name=carreer]:checked")).val();

    var score = (radioOne+radioTwo+radioThree+radiradioFour+radioFive)

    if(score > 6)
      $(".css").show
    if(score < 11 || score > 5)
      $(".c#").show
    if(score < 16 || score > 10)
      $(".ruby").show
    if(score > 15)
      $(".php").show

    event.preventDefault();
  });
});
