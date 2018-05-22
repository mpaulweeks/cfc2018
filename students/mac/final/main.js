
var loot = ["scar", "mini", "port-a-fort"];
var letters = ["a", "b", "c", "d", "e"];
var colors = ["blue", "green", ""];

function randomText() {
  var lootIndex = Math.floor(Math.random()*loot.length);
  var lootValue = loot[lootIndex];
  $("#result1").html(lootValue);

  var lettersIndex = Math.floor(Math.random()*letters.length);
  var lettersValue = letters[lettersIndex];
  $("#result2").html(lettersValue);

  var colorsIndex = Math.floor(Math.random()*colors.length);
  var colorsValue = colors[colorsIndex];
  $("div").removeClass();
  $("div").addClass(colorsValue);
}
$("button").click(randomText);
