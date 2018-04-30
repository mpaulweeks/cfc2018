
function showBear(e){
  console.log(e.target);
  $("#bear").removeClass("hidden");
}
$("#button2").click(showBear);
function hideBear(){
  $("#bear").addClass("hidden");
}
$("#bear").click(hideBear);

var kittenShow = 0;
function showKitten(){
  if (kittenShow == 0){
    $("#kitten").removeClass("hidden");
    kittenShow = 1;
  } else {
    $("#kitten").addClass("hidden");
    kittenShow = 0;
  }
}
$("#button1").click(showKitten);

function hugeMorgan(){
  $("#morgan").addClass("huge");
}
$("#morgan").click(hugeMorgan);

function hideAll(){
  $(".hideAble").addClass("hidden");
}
$("#hideAll").click(hideAll);

function hideOnClick(event){
  $(event.target).addClass("hidden");
}
$("div").click(hideOnClick);
