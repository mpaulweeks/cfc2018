function revealPopup(){
  $(".popup").removeClass("hidden");
}
$("#readMore").click(revealPopup);

function revealText(){
  $(".popup").addClass("hidden");
  $(".gradient").addClass("hidden");
  $("#readMore").addClass("hidden");
  $(".text").removeClass("hidden");
}
$("#agree").click(revealText);
