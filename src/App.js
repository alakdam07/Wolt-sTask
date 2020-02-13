import React from "react";

import "./App.css";
import Restaurent from "./Components/Restaurent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/NavBar";
import Aboutme from "./Components/Aboutme";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Restaurent} />
          <Route path="/about" component={Aboutme} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
