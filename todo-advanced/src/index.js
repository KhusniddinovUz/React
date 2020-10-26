import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from './redux/todoReducer';
import filterReducer from './redux/filterReducer';
let reducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});
let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
