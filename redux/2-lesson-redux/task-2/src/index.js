import './index.scss';
import store, { increment, decrement, reset } from './store';

const resultElem = document.querySelector('.counter__result');
const resetBtn = document.querySelector('[data-action="reset"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIncrement = () => {
  store.dispatch(increment());
};

const onDecrement = () => {
  store.dispatch(decrement());
};

const onReset = () => {
  store.dispatch(reset());
  resultElem.textContent = '';
};
incrementBtn.addEventListener('click', onIncrement);
decrementBtn.addEventListener('click', onDecrement);
resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
  const state = store.getState();
  const currentValue = state.value;
  const historyString = state.history.join('');

  resultElem.textContent = `${historyString} = ${currentValue}`;
});
