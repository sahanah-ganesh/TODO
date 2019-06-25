import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Modules/reducer.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Styles/index.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={ store }>
  <App />,
  </Provider>,
  document.getElementById('root')
);

export default store;