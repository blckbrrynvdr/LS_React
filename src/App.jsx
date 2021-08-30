import React from "react";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import "./App.css";
import PropTypes from "prop-types";
import { connect } from 'react-redux';


class App extends React.Component {

  static propTypes = {
    isLoggedIn: PropTypes.bool
  }

  render() {
    return (
      <>
        {!this.props.isLoggedIn && <Welcome />}
        {this.props.isLoggedIn && <Home />}
      </>
    );
  }
}

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
