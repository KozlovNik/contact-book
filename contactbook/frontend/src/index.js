import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { Provider, connect } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

