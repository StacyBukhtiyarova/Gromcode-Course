import React from 'react';
import Counter from './components/Counter';
import  store  from './store.js';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
export default App;
