
var whetClickCount = 0;
function revealWhet(){
  whetClickCount = whetClickCount + 1;
  if (whetClickCount == 1){
    $("#whetInfo").removeClass("hidden");
  }
  if (whetClickCount == 2){
    $("#whetInfo").addClass("hidden");
    whetClickCount = 0;
  }
}

$("#whetButton").click(revealWhet);

var scaryClickCount = 0;
function revealScary(){
  scaryClickCount = scaryClickCount + 1;
  if (scaryClickCount == 1){
    $("#scaryInfo").removeClass("hidden");
  }
  if (scaryClickCount == 2){
    $("#scaryInfo").addClass("hidden");
    scaryClickCount = 0;
  }
}

 $("#scaryButton").click(revealScary);

 var queClickCount = 0;
 function revealQue(){
   queClickCount = queClickCount + 1;
   if (queClickCount == 1){
     $("#queInfo").removeClass("hidden");
   }
   if (queClickCount == 2){
     $("#queInfo").addClass("hidden");
     queClickCount = 0;
   }
 }

  $("#queButton").click(revealQue);

  var critClickCount = 0;
  function revealCrit(){
    critClickCount = critClickCount + 1;
    if (critClickCount == 1){
      $("#critInfo").removeClass("hidden");
    }
    if (critClickCount == 2){
      $("#critInfo").addClass("hidden");
      critClickCount = 0;
    }
  }

   $("#critButton").click(revealCrit);


   var joannClickCount = 0;
   function revealJoann(){
     joannClickCount = joannClickCount + 1;
     if (joannClickCount == 1){
       $("#joannInfo").removeClass("hidden");
     }
     if (joannClickCount == 2){
       $("#joannInfo").addClass("hidden");
       joannClickCount = 0;
     }
   }

    $("#todoButton").click(revealJoann);




    function nightMode(){
    $("body").addClass("green");
    $("#greeenButton").addClass("hidden");
    $("#lightButton").removeClass("hidden");
  }
  $("#greeenButton").click(nightMode);

  function lightMode(){
    $("body").removeClass("green");
    $("#lightButton").addClass("hidden");
    $("#greeenButton").removeClass("hidden");
  }
  $("#lightButton").click(lightMode);
