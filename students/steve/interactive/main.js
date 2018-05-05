

$("#robofriends").click(function(){
    $(".robofriends").hide();
    $(".robofoes").show();
});

$("#robofoes").click(function(){
    $(".robofriends").show();
    $(".robofoes").hide();
});


var scaryClickCount = 0;
function revealscary(){
  scaryClickCount = scaryClickCount + 1;
  if (scaryClickCount == 1){
    $("#scaryInfo").removeClass("hide");
  }
  if (scaryClickCount == 2){
    $("#scaryInfo").addClass("hide");
    scaryClickCount = 0;
  }
}
$("#scaryButton").click(revealscary);

var coolClickCount = 0;
function revealcool(){
  coolClickCount = coolClickCount + 1;
  if (coolClickCount == 1){
    $("#coolInfo").removeClass("hide");
  }
  if (coolClickCount == 2){
    $("#coolInfo").addClass("hide");
    coolClickCount = 0;
  }
}
$("#coolButton").click(revealcool);

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

var critiqueClickCount = 0;
function revealcritique(){
  critiqueClickCount = critiqueClickCount + 1;
  if (critiqueClickCount == 1){
    $("#critiqueInfo").removeClass("hide");
  }
  if (critiqueClickCount == 2){
    $("#critiqueInfo").addClass("hide");
    critiqueClickCount = 0;
  }
}
$("#critiqueButton").click(revealcritique);

function darkMode(){
  $("body").addClass("dark");
  $("#stopButton").addClass("hide");
  $("#goButton").removeClass("hide");
}
$("#stopButton").click(darkMode);

function lightMode(){
  $("body").removeClass("dark");
  $("#goButton").addClass("hide");
  $("#stopButton").removeClass("hide");
}
$("#goButton").click(lightMode);
