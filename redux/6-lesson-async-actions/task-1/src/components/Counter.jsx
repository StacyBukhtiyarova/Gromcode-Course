import React from 'react';
import * as counterActions from '../counter.actions';
import { connect } from 'react-redux';
const Counter = ({ counter, increment, decrement, reset }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>
        -
      </button>
      <span className="counter__value" onClick={reset}>
        {counter}
      </span>
      <button className="counter__button" onClick={increment}>
        +
      </button>
    </div>
  );
};

const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
};

const mapState = (state) => {
  return { counter: state };
};
const connector = connect(mapState, mapDispatch);
export default connector(Counter);
