let seconds = prompt("enter the time to set for counter");


// setting an interval
let interval = setInterval(() => {
  document.getElementById("timer").innerHTML = seconds;
  if (seconds <= 0) {
    clearInterval(interval);
  }
  seconds--;
}, 1000);
