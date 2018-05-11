function toggleKor() {
  $("#eng").removeClass("toggleThis");
  $("#kor").addClass("toggleThis");
  $(".englishLyrics").addClass("hidden");
  $(".koreanLyrics").removeClass("hidden");
}

$("#kor").click(toggleKor);

function toggleEng() {
  $("#kor").removeClass("toggleThis");
  $("#eng").addClass("toggleThis");
  $(".koreanLyrics").addClass("hidden");
  $(".englishLyrics").removeClass("hidden");
}

$("#eng").click(toggleEng);
