let startTime, updatedTime, difference = 0;
let timerInterval;
let running = false;
const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("start").onclick = function () {
  if (!running) {
    startTime = new Date().getTime() - difference;
    timerInterval = setInterval(updateDisplay, 10);
    running = true;
  }
};

document.getElementById("pause").onclick = function () {
  clearInterval(timerInterval);
  running = false;
};

document.getElementById("reset").onclick = function () {
  clearInterval(timerInterval);
  running = false;
  difference = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = "";
};

document.getElementById("lap").onclick = function () {
  if (running) {
    const li = document.createElement("li");
    li.textContent = display.textContent;
    laps.appendChild(li);
  }
};

function updateDisplay() {
  updatedTime = new Date().getTime() - startTime;
  difference = updatedTime;
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  display.textContent = 
    (hours < 10 ? "0" : "") + hours + ":" +
    (minutes < 10 ? "0" : "") + minutes + ":" +
    (seconds < 10 ? "0" : "") + seconds;
}
