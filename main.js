// Musira Codes

var playing = false;
var score;

// when the start/reset button is clicked
document.getElementById("start_reset").onclick = function() {
  // if playing
  if (playing == true) {
    location.reload(); // reload page
  } else {
    // if not playing
    playing = true; // change mode to playing
    score = 0; // set score to zero
    document.getElementById("score_value").innerHTML = score;
    // shoe countdown box
    document.getElementById("time_remaining").style.display = "block";
    // change button to reset
    document.getElementById("start_reset").innerHTML = "Reset Game";
  }
};
