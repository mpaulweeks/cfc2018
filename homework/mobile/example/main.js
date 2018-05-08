// advance text shown
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

// randomly show element (in this case, numbers)
var numberCount = 0;
function randomNumber(){
  $("#number" + numberCount).addClass("hidden");

  // store the current number for comparison later
  var oldCount = numberCount;

  // generate random decimal, then force into a whole number
  var randomDecimal = Math.random() * 10;
  numberCount = Math.floor(randomDecimal);

  // if our random pick was the same as the old pick, just go to the next one
  if (oldCount == numberCount){
    numberCount = numberCount + 1;
    if (numberCount > 3){
      numberCount = 1;
    }
  }

  $("#number" + numberCount).removeClass("hidden");
}
$("#random").click(randomNumber);
