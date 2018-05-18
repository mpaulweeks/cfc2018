// function rotateIt(){
//   $(this).addClass("rotate");
// }
// $("#text").click(rotateIt)

var player;
window.onload=function()
{
  player= document.getElementById('player');
}
function playMusic()
{
  player.play();
  }
function pauseMusic()
{
  player.pause();

}
function stopMusic()
{
  player.pause();
}
