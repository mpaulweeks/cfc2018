function revealAll(){
  $("body").addClass("pink");
  $(".thoughts").addClass("hide");
  $("#robotOkay").removeClass("hide");
  $(".buttons").removeClass("hide");
}
$(".thoughts").click(revealAll)

var buttonsClickCount = 0;
function revealScary (){
  buttonsClickCount = buttonsClickCount + 1;
    if(buttonsClickCount == 1){
      $("#scaryInfo").removeClass("hide");
    }
    if(buttonsClickCount == 2){
      $("#scaryInfo").addClass("hide");
      buttonsClickCount = 0;
    }
  }
$("#scaryButton").click(revealScary);

function revealHappy (){
  buttonsClickCount = buttonsClickCount + 1;
    if(buttonsClickCount == 1){
      $("#happyInfo").removeClass("hide");
    }
    if(buttonsClickCount == 2){
      $("#happyInfo").addClass("hide");
      buttonsClickCount = 0;
    }
  }
$("#happyButton").click(revealHappy);

function revealMore (){
  buttonsClickCount = buttonsClickCount + 1;
    if(buttonsClickCount == 1){
      $("#moreInfo").removeClass("hide");
    }
    if(buttonsClickCount == 2){
      $("#moreInfo").addClass("hide");
      buttonsClickCount = 0;
    }
  }
$("#moreButton").click(revealMore);

function revealRobot (){
  buttonsClickCount = buttonsClickCount + 1;
    if(buttonsClickCount == 1){
      $("#robotDying").removeClass("hide");
      $("#robotOkay").addClass("hide");
    }
      buttonsClickCount = 0;
  }
$("#robotOkay").click(revealRobot);

function revealRobot2 (){
  buttonsClickCount = buttonsClickCount + 1;
    if(buttonsClickCount == 1){
      $("#robotOkay").removeClass("hide");
      $("#robotDying").addClass("hide");
      buttonsClickCount = 0;
    }
  }
$("#robotDying").click(revealRobot2);
