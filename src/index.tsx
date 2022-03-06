import React                            from "react";
import ReactDOM                         from "react-dom";
import App                              from "./App";
import { Provider }                     from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools }          from 'redux-devtools-extension/developmentOnly';
import thunk                            from 'redux-thunk';
import rootReducer                      from './Reducers/index';
import { getData }                      from './Actions/data.actions';

import './Styles/style.css';

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

store.dispatch(getData());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
