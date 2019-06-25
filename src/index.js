import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Modules/reducer.js';
import React from 'react';
import { render } from 'react-dom';
import App from './Components/App.js';
import './Styles/index.css';

const store = createStore(rootReducer);

render(
  <Provider store={ store }>
  <App />
  </Provider>,
  document.getElementById('root')
)