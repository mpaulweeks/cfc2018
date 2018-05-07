
var whetClickCount = 0;
function revealWhet(){
  whetClickCount = whetClickCount + 1;
  if (whetClickCount == 1){
    $("#whetInfo").removeClass("hidden");
  }
  if (whetClickCount == 2){
    $("#whetInfo").addClass("hidden");
    happyClickCount = 0;
  }
}

$("#whetButton").click(revealWhet);
