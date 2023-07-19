// Get the timer element
var timerElement = document.getElementById("timer");
var postTimerElement = document.getElementById("post-timer");
var timerStartBtn = document.querySelector(".timer-start-btn");
var postTimerContainer = document.querySelector(".post-timer-container");
var timerRestartBtn = document.querySelector(".timer-restart-btn");
var timerContainer = document.querySelector(".timer-container")
var timerMessageBox = document.querySelector("message-box")
let timer = ""
let postTimer = ""
clearInterval(postTimer)
clearInterval(timer)
// Set the initial time (1 hour and 30 minutes)
var initialTimeInSeconds = 1 * 60 * 60 + 30 * 60;
//var initialTimeInSeconds = 5;
var timeInSeconds = initialTimeInSeconds;
var timeSinceAlarm = 0;

// Update the timer display
function updateTimer() {
  var hours = Math.floor(timeInSeconds / 3600);
  var minutes = Math.floor((timeInSeconds % 3600) / 60);
  var seconds = timeInSeconds % 60;
  var formattedTime =
    ("0" + hours).slice(-2) +
    ":" +
    ("0" + minutes).slice(-2) +
    ":" +
    ("0" + seconds).slice(-2);
  timerElement.textContent = formattedTime;
}
function updatePostTimer() {
    var hours = Math.floor(timeSinceAlarm / 3600);
    var minutes = Math.floor((timeSinceAlarm % 3600) / 60);
    var seconds = timeSinceAlarm % 60;
    var formattedTime =
      ("0" + hours).slice(-2) +
      ":" +
      ("0" + minutes).slice(-2) +
      ":" +
      ("0" + seconds).slice(-2);
      postTimerElement.textContent = formattedTime;
  }

// Restart the timer
function restartTimer() {
    postTimerContainer.classList.add("hidden")
    postTimerContainer.classList.remove("visible")
    clearInterval(timer)
    clearInterval(postTimer)
    timerContainer.classList.remove("blinking-text")
  timerStartBtn.classList.add("visible");
  timerRestartBtn.classList.remove("visible");
  timerStartBtn.classList.remove("hidden");
  timerRestartBtn.classList.add("hidden");
  timeInSeconds = initialTimeInSeconds;
  timeSinceAlarm = 0;
  updateTimer();
  updatePostTimer();
}

// Add click event listener to the timer element
//container.addEventListener("click", restartTimer);
timerStartBtn.addEventListener("click", initializeTimer);
timerRestartBtn.addEventListener("click", restartTimer);

function initializeTimer() {
    clearInterval(postTimer)
    clearInterval(timer)
  timerStartBtn.classList.remove("visible");
  timerRestartBtn.classList.add("visible");
  timerStartBtn.classList.add("hidden");
  timerRestartBtn.classList.remove("hidden");
  // Initialize the timer
   timer = setInterval(function () {
    updateTimer();
    timeInSeconds--;

    if (timeInSeconds < 0) {
        clearInterval(timer);
        timerContainer.classList.add("blinking-text")
        startPostTimer()
    }
  }, 1000);
}

function startPostTimer(){
    postTimerContainer.classList.remove("hidden")
    postTimerContainer.classList.add("visible")
    postTimer = setInterval(function () {
        updatePostTimer();
        timeSinceAlarm++;

      }, 1000);
}

