import React from 'react';
import Clock from './Clock';
const App = () => {
  return (
    <>
      <Clock offset={-5} location="New York" />
      <Clock offset={0} location="London" />
      <Clock offset={2} location="Kyiv" />
    </>
  );
};
export default App;
