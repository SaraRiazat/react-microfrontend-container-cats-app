import React from "react";
import { Router,BrowserRouter, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import RandomCat from "./RandomCat";
import "./App.css";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <BrowserRouter history={history}>
      <Route exact path="/" component={RandomCat} />
      <Route exact path="/CRM" component={RandomCat} />
      <Route exact path='/CRM/Page1' component={Page1} />
      <Route exact path='/CRM/Page2' component={Page2} />
      <Route exact path='/CRM/Page3' component={Page3} />
    </BrowserRouter>
  );
}

export default App;
