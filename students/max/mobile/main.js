function randomLetter(){
    $(".letter").addClass("hidden");

    var randomNumber1 = Math.floor(Math.random()*26+1);
    var randomNumber2 = Math.floor(Math.random()*26+1);
    var randomNumber3 = Math.floor(Math.random()*26+1);

    if(randomNumber1 == randomNumber2){
      randomNumber2 = randomNumber2 + 1;
    }
    if(randomNumber1 == randomNumber3){
      randomNumber3 = randomNumber3 + 1;
    }
    if(randomNumber2 == randomNumber3){
      randomNumber3 = randomNumber3 + 1;
    }
    console.log(randomNumber1);
    console.log(randomNumber2);
    console.log(randomNumber3);
    console.log("/");

    $("#letter" + randomNumber1).removeClass("hidden");
    $("#letter" + randomNumber2).removeClass("hidden");
    $("#letter" + randomNumber3).removeClass("hidden");
}
$("#random").click(randomLetter);
