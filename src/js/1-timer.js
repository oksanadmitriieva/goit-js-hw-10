import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const userSelectedDate = selectedDates[0];

    if (userSelectedDate < new Date()) {
      iziToast.error({
        position: 'topRight',
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      document.querySelector('[data-start]').disabled = true;
    } else {
      document.querySelector('[data-start]').disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

document.querySelector('[data-start]').addEventListener('click', () => {
  const endDate = new Date(
    document.querySelector('#datetime-picker').value
  ).getTime();

  document.querySelector('#datetime-picker').disabled = true;
  document.querySelector('[data-start]').disabled = true;

  const timerInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeDifference = endDate - currentTime;

    if (timeDifference <= 0) {
      clearInterval(timerInterval);
      updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      iziToast.success({
        position: 'topRight',
      });
    } else {
      const timeObject = convertMs(timeDifference);
      updateTimerDisplay(timeObject);
    }
  }, 1000);
});

function updateTimerDisplay({ days, hours, minutes, seconds }) {
  const updateElement = (selector, value) => {
    document.querySelector(selector).textContent = addLeadingZero(value);
  };

  updateElement('[data-days]', days);
  updateElement('[data-hours]', hours);
  updateElement('[data-minutes]', minutes);
  updateElement('[data-seconds]', seconds);
}

const addLeadingZero = value => (value < 10 ? `0${value}` : value);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, 
}