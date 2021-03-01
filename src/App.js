import React, { Component } from "react";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
