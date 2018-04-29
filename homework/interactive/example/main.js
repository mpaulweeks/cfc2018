
var kittenShow = false;
function showKitten(){
  if (kittenShow){
    $("#kitten").addClass("hidden");
    kittenShow = false;
  } else {
    $("#kitten").removeClass("hidden");
    kittenShow = true;
  }
}
$("#button1").click(showKitten);

function showBear(){
  $("#bear").removeClass("hidden");
}
$("#button2").click(showBear);
