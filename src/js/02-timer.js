import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startButtonEl = document.querySelector('[data-start]');
startButtonEl.setAttribute('disabled', '');
const myIput = document.querySelector('#datetime-picker');

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let difference;
let timerId = null;

// Parametr selectedDates to tablica wybranych dat, dlatego bierzemy z niej pierwszy element.

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  locale: {
    firstDayOfWeek: 1,
  },
  onClose(selectedDates) {
    if (selectedDates[0] - new Date() > 0) {
      startButtonEl.removeAttribute('disabled');
      Notify.success('Start the countdown');
      let today = new Date();
      let finalDate = selectedDates[0];
      difference = finalDate.getTime() - today.getTime();
      console.log(difference);
      console.log(convertMs(difference));
    } else {
      Notify.warning('Please choose a date in the future');
    }
  },
};

const fp = flatpickr(myIput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  if (value >= 10) {
    return value;
  } else {
    return value.toString().padStart(2, '0');
  }
}

startButtonEl.addEventListener('click', () => {
  timerId = setInterval(() => {
    startButtonEl.setAttribute('disabled', '');

    if (difference >= 1000) {
      difference -= 1000;
      let timeLeft = convertMs(difference);
      console.log('Time left: ', timeLeft);
      daysEl.innerHTML = addLeadingZero(timeLeft.days);
      hoursEl.innerHTML = addLeadingZero(timeLeft.hours);
      minutesEl.innerHTML = addLeadingZero(timeLeft.minutes);
      secondsEl.innerHTML = addLeadingZero(timeLeft.seconds);
    } else {
      Notify.info(`The countdown has finished`);
      clearInterval(timerId);
    }
  }, 1000);
});
