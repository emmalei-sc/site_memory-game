/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// global constants
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
//var pattern = [1, 3, 5, 3, 1, 4, 6, 4, 1, 1];
var pattern = [];
var mysteryPattern = [1, 2, 4, 2, 6, 6, 5, 1, 2, 4, 2, 5, 5, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var mysterySongPlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 500;
var cluePauseTime = 200;

function startGame() {
  pattern = generateRandomPattern();
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 500;
  cluePauseTime = 200;
  progress = 0;
  guessCounter = 0;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("mysteryBtn").classList.add("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("mysteryBtn").classList.remove("hidden");
}

function startMysterySong() {
  mysterySongPlaying = true;
  document.getElementById("mysteryBtn").classList.add("hidden");
  playMysterySong();
}

function generateRandomPattern() {
  var tempPattern = [];
  for (let i = 0; i < Math.floor(Math.random() * 8) + 5; i++) {
    tempPattern[i] = Math.floor(Math.random() * 8) + 1;
    console.log(tempPattern[i]);
  }
  return tempPattern;
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.626,
  2: 293.665,
  3: 329.628,
  4: 349.228,
  5: 391.995,
  6: 440.0,
  7: 493.883,
  8: 523.251,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
  // if (mysterySongPlaying)
  // {
  //   document.getElementById("mysteryFoto").classList.remove("hidden");
  // }
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
  // document.getElementById("mysteryFoto").classList.add("hidden");
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying || mysterySongPlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime -= 20;
  cluePauseTime -= 30;
}

function playMysterySong() {
  context.resume();
  clueHoldTime = 90;
  cluePauseTime = 90;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i < mysteryPattern.length; i++) {
    console.log("play note: " + mysteryPattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, mysteryPattern[i]); // set a timeout to play that clue
    if (i == 4 || i == 11) {
      clueHoldTime = 160;
      cluePauseTime = 210;
    } else if (i == 6) {
      cluePauseTime = 300;
    } else if (i == 7) {
      clueHoldTime = 90;
      cluePauseTime = 90;
    }
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Good job! You won :D");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  // add game logic here
  if (btn != pattern[guessCounter]) {
    loseGame();
  } else if (guessCounter < progress) {
    guessCounter++;
  } else if (progress < pattern.length - 1) {
    progress++;
    playClueSequence();
  } else {
    winGame();
  }
}
