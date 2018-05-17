var playing = 0;
function playMusic(){
  if (playing == 1){
    $("#song").trigger("pause");
    $(".spool").removeClass("rotation")
  }
  if (playing == 0){
    $("#song").trigger("play");
    $(".spool").addClass("rotation")
  }
  playing = playing + 1;
  if (playing > 1){
    playing = 0;
  }
}
$("#playMusic").click(playMusic)
