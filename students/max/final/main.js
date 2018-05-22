
var loot = ["scar", "mini", "port-a-fort"];
var letters = ["a", "b", "c", "d", "e"];
var colors = [
  "blue",
  "green",
  "",
];

function coinFlip() {
  return Math.random() > 0.5;
}

function randomLoot(){
  var lootIndex = Math.floor(Math.random()*loot.length);
  var lootValue = loot[lootIndex];
  $("#result1").append(`<div class="thingy">` + lootValue + `</div>`);
}

function randomText() {
  $("#result1").html("");

  var includeSlashes = coinFlip();

  var numLoot = Math.random()*5;

  // option 1 for variable number of loots
  randomLoot();
  randomLoot();
  randomLoot();
  if (numLoot > 3){
    randomLoot();
  }
  if (numLoot > 4){
    randomLoot();
  }

  // option 2 for variable number
  while(numLoot > 0){
    randomLoot();
    numLoot -= 1;
  }

  var lettersIndex = Math.floor(Math.random()*letters.length);
  var lettersValue = letters[lettersIndex];
  $("#result2").html(lettersValue);

  var colorsIndex = Math.floor(Math.random()*colors.length);
  var colorsValue = colors[colorsIndex];
  $("div").removeClass();
  $("div").addClass(colorsValue);
}
$("button").click(randomText);
