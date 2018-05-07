function revealText(){
  $(".heading").addClass("hidden");
  $(".text").removeClass("hidden");
}

$(".heading").click(revealText);

function hideText(){
  $(".text").addClass("hidden");
  $(".heading").removeClass("hidden");
}

$(".text").click(hideText);

var buttonClickCount = 0;

function revealOne(){
  buttonClickCount = buttonClickCount + 1;
    if(buttonClickCount == 1){
      $("#infoOne").removeClass("hidden");
    }
    if(buttonClickCount == 2){
      $("#infoOne").addClass("hidden");
      buttonClickCount = 0;
    }
}
$("#buttonOne").click(revealOne);

function revealTwo(){
  buttonClickCount = buttonClickCount + 1;
    if(buttonClickCount == 1){
      $("#infoTwo").removeClass("hidden");
    }
    if(buttonClickCount == 2){
      $("#infoTwo").addClass("hidden");
      buttonClickCount = 0;
    }
}
$("#buttonTwo").click(revealTwo);

function revealThree(){
  buttonClickCount = buttonClickCount + 1;
    if(buttonClickCount == 1){
      $("#infoThree").removeClass("hidden");
    }
    if(buttonClickCount == 2){
      $("#infoThree").addClass("hidden");
      buttonClickCount = 0;
    }
}
$("#buttonThree").click(revealThree);
