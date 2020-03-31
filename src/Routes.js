import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NoMatchPage from "./components/common/NoMatchPage";
import Solaris from "./containers/Solaris";
import Login from "./components/login/Login";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/solaris" render={() => <Solaris />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route component={NoMatchPage} />
      </Switch>
    );
  }
}
