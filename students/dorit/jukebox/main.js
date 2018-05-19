
function playMusic(){
    $("#song").trigger("play");
  }
  function rotateHead(){
  var oldHead = $("#head");
  var newHead = oldHead.clone(true);
  oldHead.before(newHead);
  oldHead.remove();
  newHead.addClass("rotate");
  }

function playMusicRotate (){
  playMusic();
  rotateHead();
}
