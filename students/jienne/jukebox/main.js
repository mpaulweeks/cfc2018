function nightMode(){
  $("body").addClass("dark");
  $("#darkButton").addClass("hidden");
  $("#lightButton").removeClass("hidden");
}
$("#darkButton").click(nightMode);

function lightMode(){
  $("body").removeClass("dark");
  $("#lightButton").addClass("hidden");
  $("#darkButton").removeClass("hidden");
}
$("#lightButton").click(lightMode);
