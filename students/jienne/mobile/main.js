
function toggleUnclick() {
  $("#click").removeClass("toggleThis");
  $("#unclick").addClass("toggleThis");
  $(".mistake").addClass("hidden");
  $(".reasoning").removeClass("hidden");
}

$("#unclick").click(toggleUnclick);

function toggleClick() {
  $("#unclick").removeClass("toggleThis");
  $("#click").addClass("toggleThis");
  $(".reasoning").addClass("hidden");
  $(".mistake").removeClass("hidden");
}

$("#click").click(toggleClick);

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
