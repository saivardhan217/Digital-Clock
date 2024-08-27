function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("milliseconds").textContent = milliseconds;
}

function stopClock() {
  const hours = document.getElementById("hours").textContent;
  const minutes = document.getElementById("minutes").textContent;
  const seconds = document.getElementById("seconds").textContent;
  const milliseconds = document.getElementById("milliseconds").textContent;

  const stoppedTime = `Stopped Time: ${hours}:${minutes}:${seconds}:${milliseconds}`;
  document.getElementById("stoppedTime").textContent = stoppedTime;
}

function clearClock() {
  document.getElementById("stoppedTime").textContent = ""; // Clear the stopped time display
}

setInterval(updateClock, 1);

document.getElementById("stopButton").addEventListener("click", stopClock);
document.getElementById("clearButton").addEventListener("click", clearClock);
