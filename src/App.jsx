import React from "react";
import { HomeWithAuth } from "./pages/Home";
import Welcome from "./pages/Welcome";
import "./App.css";
import { withAuth } from "./context/auth";
import PropTypes from "prop-types";

class App extends React.Component {

  static propTypes = {
    isLoggedIn: PropTypes.bool
  }

  render() {
    return (
      <>
        {!this.props.isLoggedIn && <Welcome />}
        {this.props.isLoggedIn && <HomeWithAuth />}
      </>
    );
  }
}

export default withAuth(App);
