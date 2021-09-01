import React from "react";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import "./App.css";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { getCardData } from "./store/actions/card";
import { logIn } from "./store/actions/authorization";


class App extends React.Component {

  static propTypes = {
    isLoggedIn: PropTypes.bool
  }

  componentDidMount() {
    if (this.props.token) {
      this.props.getCardData(this.props.token);
      this.props.logIn(this.props.token);
    }
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

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn, 
  token: state.auth.token
})

export default connect(
  mapStateToProps,
  { getCardData, logIn }
)(App);
