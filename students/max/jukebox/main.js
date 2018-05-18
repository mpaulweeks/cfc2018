function play(){
  $("img").addClass("bounce");
  $("#music").trigger("play");
}
$("#button").click(play);
