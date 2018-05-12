var happyClickCount = 0;
function revealHappy(){
  happyClickCount = happyClickCount + 1;
  if (happyClickCount == 1){
    $("#happyInfo").removeClass("hidden");
  }
  if (happyClickCount == 2){
    $("#happyInfo").addClass("hidden");
    happyClickCount = 0;
  }
}
$("#happyButton").click(revealHappy);

var isFullscreen = 0;
function fullImage(){
  isFullscreen = isFullscreen + 1;
  if (isFullscreen == 1){
    $(this).addClass("fullScreen");
  }
  if (isFullscreen == 2){
    $(this).removeClass("fullScreen");
    isFullscreen = 0;
  }
}
$(".sameWidth").click(fullImage);

function revealSecrets(){
  $("#secretButton").addClass("hidden");
  $("#secretInfo").removeClass("hidden");
}
$("#secretButton").click(revealSecrets);

function revealSuperSecrets(){
  $("#superSecretButton").addClass("hidden");
  $("#superSecretInfo").removeClass("hidden");
}
$("#superSecretButton").click(revealSuperSecrets);

function nightMode(){
  $("body").addClass("dark");
  $("#darkButton").addClass("hidden");
  $("#lightButton").removeClass("hidden");
}
$("#darkButton").click(nightMode);

function lightMode(){
  $("body").removeClass("dark");
  $("#lightButton").addClass("hidden");
  $("#darkButton").removeClass("hidden");
}
$("#lightButton").click(lightMode);
