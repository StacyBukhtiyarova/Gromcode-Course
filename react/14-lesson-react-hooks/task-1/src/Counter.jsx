import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter">
      <button
        data-action="decrease"
        className="counter__button"
        onClick={() => setCounter(counter - 1)}>
        -
      </button>
      <span className="counter__value" onClick={() => setCounter(counter)}>
        {counter}
      </span>
      <button
        data-action="increase"
        className="counter__button"
        onClick={() => setCounter(counter + 1)}>
        +
      </button>
    </div>
  );
};

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };
//     this.decrement = this.decrement.bind(this);
//   }
//   decrement() {
//     this.setState({
//       counter: this.state.counter - 1,
//     });
//   }
//   increment = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   };
//   reset() {
//     this.setState({
//       counter: 0,
//     });
//   }
//   render() {
//     return (
//       <div className="counter">
//         <button
//           data-action="decrease"
//           className="counter__button"
//           onClick={this.decrement}>
//           -
//         </button>
//         <span className="counter__value" onClick={() => this.reset()}>{this.state.counter }</span>
//         <button
//           data-action="increase"
//           className="counter__button"
//           onClick={this.increment}>
//           +
//         </button>
//       </div>
//     );
//   }
// }

export default Counter;
