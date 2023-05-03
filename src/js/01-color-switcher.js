const startButtonEl = document.querySelector('[data-start]');
const stopButtonEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
console.log(bodyEl);

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBgColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

function toggleButtons(active, inactive) {
  inactive.setAttribute('disabled', '');
  active.removeAttribute('disabled');
}
startButtonEl.addEventListener('click', () => {
  changeBgColor();
  intervalId = setInterval(changeBgColor, 1000);
  toggleButtons(stopButtonEl, startButtonEl);
});

stopButtonEl.addEventListener('click', () => {
  clearInterval(intervalId);
  toggleButtons(startButtonEl, stopButtonEl);
});
