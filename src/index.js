/* global document */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Search from "./search/Search";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const Root = () => (
  <Provider store={store}>
    <Router>
      <Search />
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
