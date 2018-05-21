var playing = 0;
function playMusic(){
  if (playing == 1){
    $("#song").trigger("pause");
    $(".flower").removeClass("rotation")
  }
  if (playing == 0){
    $("#song").trigger("play");
    $(".flower").addClass("rotation")
  }
  playing = playing + 1;
  if (playing > 1){
    playing = 0;
  }
}
$("#playMusic").click(playMusic)
