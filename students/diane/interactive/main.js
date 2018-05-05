$("#beePic").click(function(){
    $(".picturebee").hide();
    $(".picturethree").show();
});

$("#threePic").click(function(){
    $(".picturebee").show();
    $(".picturethree").hide();
});

var fearClickCount = 0;
function revealFear(){
  fearClickCount = fearClickCount + 1;
  if (fearClickCount == 1){
    $("#fearInfo").removeClass("hide");
  }
  if (fearClickCount == 2){
    $("#fearInfo").addClass("hide");
    fearClickCount = 0;
  }
}
$("#fearButton").click(revealFear);

var interestingClickCount = 0;
function revealInteresting(){
  interestingClickCount = interestingClickCount + 1;
  if (interestingClickCount == 1){
    $("#interestingInfo").removeClass("hide");
  }
  if (interestingClickCount == 2){
    $("#interestingInfo").addClass("hide");
    interestingClickCount = 0;
  }
}
$("#interestingButton").click(revealInteresting);

var questionsClickCount = 0;
function revealQuestions(){
  questionsClickCount = questionsClickCount + 1;
  if (questionsClickCount == 1){
    $("#questionsInfo").removeClass("hide");
  }
  if (questionsClickCount == 2){
    $("#questionsInfo").addClass("hide");
    questionsClickCount = 0;
  }
}
$("#questionsButton").click(revealQuestions);

var criticismsClickCount = 0;
function revealCriticisms(){
  criticismsClickCount = criticismsClickCount + 1;
  if (criticismsClickCount == 1){
    $("#criticismsInfo").removeClass("hide");
  }
  if (criticismsClickCount == 2){
    $("#criticismsInfo").addClass("hide");
    criticismsClickCount = 0;
  }
}
$("#criticismsButton").click(revealCriticisms);

function blueMode(){
  $("body").addClass("dark");
  $("#threeButton").addClass("hide");
  $("#beeButton").removeClass("hide");
}
$("#threeButton").click(blueMode);

function yellowMode(){
  $("body").removeClass("dark");
  $("#beeButton").addClass("hide");
  $("#threeButton").removeClass("hide");
}
$("#beeButton").click(yellowMode);
