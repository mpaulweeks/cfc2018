function cheesyMode(){
  $("body").addClass("cheeseup");
  $("#cheesyButton").addClass("hide");
  $("#nocheesyButton").removeClass("hide");
}
$("#cheesyButton").click(cheesyMode);

function nocheesyMode(){
  $("body").removeClass("cheeseup");
  $("#nocheesyButton").addClass("hide");
  $("#cheesyButton").removeClass("hide");
}
$("#nocheesyButton").click(nocheesyMode);

$(".cheesebutton").click(function(){
$(".pics").hide();
$(".pics2").show();
});

$("#nocheesyButton").click(function(){
  $(".pics").show();
  $(".pics2").hide();
});
