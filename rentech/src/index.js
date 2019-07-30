import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./store/reducers/index";
import { authMiddleware } from "./customMiddleware/authMiddleware";
import App from "./App";

import "./scss/index.scss";

const store = createStore(rootReducer, applyMiddleware(thunk, authMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
