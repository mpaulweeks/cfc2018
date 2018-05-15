
function rotateIt(){
  $(this).addClass("rotate");
}
$("#text").click(rotateIt)

var playing = 0;
function playMusic(){
  if (playing == 1){
    $("#song").trigger("pause");
  }
  if (playing == 0){
    $("#song").trigger("play");
  }
  playing = playing + 1;
  if (playing > 1){
    playing = 0;
  }
}
$("#playMusic").click(playMusic)
