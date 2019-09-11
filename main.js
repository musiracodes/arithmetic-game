// Musira Codes

var playing = false;
var score;
var action;
var timeRemaining;
var correctAnswer;

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
    // show countdown box
    show("time_remaining");
    timeRemaining = 60;
    document.getElementById("time_remaining_value").innerHTML = timeRemaining;
    // hide game over box
    hide("game_over");

    // change button to reset
    document.getElementById("start_reset").innerHTML = "Reset Game";

    startCountdown();

    // generate new Q&A

    generateQA();
  }
};

for (i = 1; i < 5; i++) {
  document.getElementById("box-" + i).onclick = function() {
    // if we are playing
    if (playing == true) {
      if (this.innerHTML == correctAnswer) {
        // correct

        score++; //increase score
        document.getElementById("score_value").innerHTML = score;
        // hide wrong box
        hide("wrong");
        show("correct");
        setTimeout(function() {
          hide("correct");
        }, 1000);

        // generate new Q&A
        generateQA();
      } else {
        // wrong answer
        hide("correct");
        show("wrong");
        setTimeout(function() {
          hide("wrong");
        }, 1000);
      }
    }
  };
}

// functions

// start counter
function startCountdown() {
  action = setInterval(function() {
    timeRemaining -= 1;
    document.getElementById("time_remaining_value").innerHTML = timeRemaining;
    if (timeRemaining == 0) {
      stopCountdown();
      show("game_over");
      document.getElementById("game_over").innerHTML =
        "<p>Game Over!</p><p>Your score is " + score + ".</p>";
      hide("time_remaining");
      hide("correct");
      hide("wrong");
      playing = false;
      document.getElementById("start_reset").innerHTML = "Start Game";
    }
  }, 1000);
}

//stop counter
function stopCountdown() {
  clearInterval(action);
}

// hides an element
function hide(Id) {
  document.getElementById(Id).style.display = "none";
}

// show an element
function show(Id) {
  document.getElementById(Id).style.display = "block";
}

function generateQA() {
  var x = 1 + Math.round(9 * Math.random());
  var y = 1 + Math.round(9 * Math.random());
  correctAnswer = x * y;
  document.getElementById("question").innerHTML = x + "x" + y;
  var correctPosition = 1 + Math.round(3 * Math.random());
  document.getElementById("box-" + correctPosition).innerHTML = correctAnswer; // fill one box with correct answer

  // fill other boxes with wrong answers

  var answers = [correctAnswer];

  for (i = 1; i < 5; i++) {
    if (i != correctPosition) {
      var wrongAnswer;
      do {
        wrongAnswer =
          (1 + Math.round(9 * Math.random())) *
          (1 + Math.round(9 * Math.random())); // a wrong answer
      } while (answers.indexOf(wrongAnswer) > -1);
      document.getElementById("box-" + i).innerHTML = wrongAnswer;
      answers.push(wrongAnswer);
    }
  }
}
