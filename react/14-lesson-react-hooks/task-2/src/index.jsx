import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './index.scss';
import App from './App';

const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);
