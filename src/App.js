import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Regular from "./components/Regular";
import Special from "./components/Special";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/tip/regular" component={Regular}/>
          <Route exact path="/tip/special" component={Special}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
