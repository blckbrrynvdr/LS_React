import React from "react";
import { HomeWithAuth } from "./pages/Home";
import Welcome from "./pages/Welcome";
import "./App.css";
import { withAuth } from "./components/context/withAuth";
import PropTypes from "prop-types";

class App extends React.Component {

  static propTypes = {
    isLoggedIn: PropTypes.bool
  }

  state = {
    page: "home",
    auth: false,
  };

  onLogin = (e) => {
    e.preventDefault();
    this.setState({ auth: true });
  };

  logout = () => {
    this.setState({ auth: false });
  };

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
