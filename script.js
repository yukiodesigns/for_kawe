function openLetter() {
    const loveLetter = document.getElementById("loveLetter");
    loveLetter.style.display = "block";
  }
// function openLoveLetter() {
//     var loveLetter = document.getElementById("loveletter");
//     var heartContainer = document.getElementById("heart-container");
//     var backgroundMusic = document.getElementById("background-music");

//     loveLetter.style.display = "block";
//     heartContainer.style.background = "linear-gradient(to bottom right, #9400D3, #DA70D6, #FF1493)";
//     backgroundMusic.play();
// }

function closeLoveLetter() {
    var loveLetter = document.getElementById("loveLetter");
    var heartContainer = document.getElementById("heart-container");
    var backgroundMusic = document.getElementById("background-music");

    loveLetter.style.display = "none";
    heartContainer.style.background = "";
    backgroundMusic.pause();
}
