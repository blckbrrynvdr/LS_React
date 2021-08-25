import React from "react";
import { HomeWithAuth } from "./pages/Home";
import Welcome from "./pages/Welcome";
import "./App.css";
import { withAuth } from "./components/context/withAuth";

class App extends React.Component {
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
      {/* {!this.state.auth && <Welcome auth={this.onLogin} />}
      {this.state.auth && <Home logout={this.logout} />} */}
        {!this.props.isLoggedIn && <Welcome />}
        {this.props.isLoggedIn && <HomeWithAuth />}
      </>
    );
  }
}

export default withAuth(App);
