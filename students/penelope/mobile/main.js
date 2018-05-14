var crystalCount = 1;
function nextCrystal(){
  $("#crystal" + crystalCount).addClass("hidden");

  crystalCount = crystalCount + 1;
  if (crystalCount > 6){
    crystalCount = 1;
  }

  $("#crystal" + crystalCount).removeClass("hidden");
}
$("#ymas").click(nextCrystal);
