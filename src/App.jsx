import React from "react";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import "./App.css";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";


class App extends React.Component {

  static propTypes = {
    isLoggedIn: PropTypes.bool
  }

  render() {
    return (
      <>
        <Switch>
          <PrivateRoute path="/home" component={ Home } />
          {this.props.isLoggedIn && <Redirect to="/home"/>}
          <Route path="/" component={ Welcome } />
        </Switch>
      </>
    );
  }
}

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
