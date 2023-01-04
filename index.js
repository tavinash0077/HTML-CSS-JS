import './style.css';
var stopwatch = document.getElementById('stopwatch');
var startBtn = document.getElementById('startBtn');
var timeoutid = null;

var ms = 0;
var sec = 0;
var min = 0;

function start(flag) {
  if (flag) {
    startBtn.disabled = true;
  }
  timeoutid = setTimeout(function () {
    ms = parseInt(ms);
    sec = parseInt(sec);
    min = parseInt(min);

    ms++;

    if (ms == 100) {
      sec = sec + 1;
      ms = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (ms < 10) {
      ms = '0' + ms;
    }
    if (sec < 10) {
      sec = '0' + sec;
    }
    if (min < 10) {
      min = '0' + min;
    }
    stopwatch.innerHTML = min + ':' + sec + ':' + ms;
    start();
  }, 10);
}
function stop() {
  clearTimeout(timeoutid);
  startBtn.disabled = false;
}

function reset() {
  ms = 0;
  sec = 0;
  min = 0;
  clearTimeout(timeoutid);
  stopwatch.innerHTML = '00:00:00';
  startBtn.disabled = false;
}
