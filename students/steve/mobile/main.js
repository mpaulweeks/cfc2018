var cutCount = 1;
function nextCut(){
  $("#cut" + cutCount).addClass("hidden");

  cutCount = cutCount + 1;
  if (cutCount > 10){
    cutCount = 1;
  }

  $("#cut" + cutCount).removeClass("hidden");
}
$("#next").click(nextCut);

// show full screen image when image is clicked
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
$(".sameHeight").click(fullImage);
