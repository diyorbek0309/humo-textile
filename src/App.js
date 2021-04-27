import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/landing/Navbar";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>{/* <Route exact path="/" component={Landing} /> */}</Switch>
      </Router>
    </Provider>
  );
};

export default App;
