
var buttonClickCount = 0;
function revealInfo(){
  buttonClickCount = buttonClickCount + 1;
  if (buttonClickCount == 1){
    $("#firstInfo").removeClass("hidden");
  }
  if (buttonClickCount == 2){
    $("#firstInfo").addClass("hidden");
    buttonClickCount = 0;
  }
}
$("#firstButton").click(revealInfo);

var secondClickCount = 0;
function revealSecondInfo(){
  secondClickCount = secondClickCount + 1;
  if (secondClickCount == 1){
    $("#secondInfo").removeClass("hidden");
  }
  if (secondClickCount == 2){
    $("#secondInfo").addClass("hidden");
    secondClickCount = 0;
  }
}
$("#secondButton").click(revealSecondInfo);

var fourthClickCount = 0;
function revealFourthInfo(){
  fourthClickCount = fourthClickCount + 1;
  if (fourthClickCount == 1){
    $("#fourthInfo").removeClass("hidden");
  }
  if (fourthClickCount == 2){
    $("#fourthInfo").addClass("hidden");
    fourthClickCount = 0;
  }
}
$("#fourthButton").click(revealFourthInfo);


function aiMode(){
  $("body").addClass("sabotage");
  $("#firstButton").removeClass("border");
  $("#secondButton").removeClass("border");
  $("#thirdButton").removeClass("border");
  $("#fourthButton").removeClass("border");
  $("#bar").removeClass("hidden");
  $("img").addClass("hidden");
}
$("#thirdButton").click(aiMode);
