import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>

          <Route exact path="/login" component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
