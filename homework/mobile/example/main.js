
var textCount = 1;
function nextText(){
  $("#text" + textCount).addClass("hidden");

  textCount = textCount + 1;
  if (textCount > 3){
    textCount = 1;
  }

  $("#text" + textCount).removeClass("hidden");
}
$("#next").click(nextText);
