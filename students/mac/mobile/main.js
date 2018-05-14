function spikeMode(){
  $("#batman").removeClass("hidden");
  $("body").addClass("red");
  $("img").removeClass("button");
}
$("#wrongOne").click(spikeMode);

function netMode(){
  $("#net").removeClass("hidden");
  $("body").addClass("red")
}
$("#wrongTwo").click(netMode);

function macaulayMode(){
  $("#ornaments").removeClass("hidden");
  $("body").addClass("red")
}
$("#wrongThree").click(macaulayMode);

function freedomMode(){
  $("#freedom").removeClass("hidden");
  $("body").addClass("blue")
}
$("#freedomButton").click(freedomMode);
