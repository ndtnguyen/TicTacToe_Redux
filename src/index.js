import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './containers/Game';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import tictactoeApp from './reducers/index'

let store = createStore(tictactoeApp);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);