//---Text Reveal --//
  //-- fear reveal--//
var fearClickCount = 0;
function revealText1(){
  fearClickCount = fearClickCount + 1;

  if (fearClickCount == 1){
    $("#thingsIFear").removeClass("hidden");
  }
  if (fearClickCount == 2){
    $("#thingsIFear").addClass("hidden");
    fearClickCount = 0;
  }
}
$("#fear").click(revealText1);

  //-- excite reveal --//
var exciteClickCount = 0;
function revealText2(){
  exciteClickCount = exciteClickCount + 1;

  if (exciteClickCount == 1){
    $("#thingsThatExcite").removeClass("hidden");
  }
  if (exciteClickCount == 2){
    $("#thingsThatExcite").addClass("hidden");
    exciteClickCount = 0;
  }
}
$("#excite").click(revealText2);

  //-- questions reveal --//
var questClickCount = 0;
function revealText3(){
  questClickCount = questClickCount + 1;

  if (questClickCount == 1){
    $("#questions").removeClass("hidden");
  }
  if (questClickCount == 2){
    $("#questions").addClass("hidden");
    questClickCount = 0;
  }
}
$("#quest").click(revealText3);
  //-- criticism reveal --//
var critClickCount = 0;
function revealText4(){
  critClickCount = critClickCount + 1;

  if (critClickCount == 1){
    $("#criticism").removeClass("hidden");
  }
  if (critClickCount == 2){
    $("#criticism").addClass("hidden");
    critClickCount = 0;
  }
}
$("#crit").click(revealText4);
