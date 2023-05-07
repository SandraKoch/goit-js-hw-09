import { Notify } from 'notiflix/build/notiflix-notify-aio';
const promisesFormEl = document.querySelector('.form');
promisesFormEl.classList.add('promises-form');
const delayInputEl = document.querySelector('[name="delay"]');
const stepInputEl = document.querySelector('[name="step"]');
const amountInputEl = document.querySelector('[name="amount"]');

const submitButtonEl = document.querySelector('[type="submit"]');
console.log(submitButtonEl);

let firstDelay;
let delayStep;
let amount;

submitButtonEl.addEventListener('click', e => {
  e.preventDefault();
  firstDelay = Number(delayInputEl.value);
  delayStep = Number(stepInputEl.value);
  amount = Number(amountInputEl.value);

  for (let i = 0; i < amount; i++) {
    const promise = createPromise(i + 1, firstDelay + delayStep * i);
    promise
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});

function createPromise(position, delay) {
  const promiseData = {
    position,
    delay,
  };
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(promiseData);
      } else {
        reject(promiseData);
      }
    }, delay);
  });

  //it has to return the promise in order to have an access to promiseData !
  return promise;
}
