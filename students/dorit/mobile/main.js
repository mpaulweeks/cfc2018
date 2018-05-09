// advance cartoon shown
var cartoonCount = 1;
function nextCartoon(){
  $("#cartoon" + cartoonCount).addClass("hidden");

  cartoonCount = cartoonCount + 1;
  if (cartoonCount > 8){
    cartoonCount = 1;
  }

  $("#cartoon" + cartoonCount).removeClass("hidden");
}
$("#next").click(nextCartoon);

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
