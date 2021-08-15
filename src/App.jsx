import React from 'react';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import './App.css';

class App extends React.Component {
  state = {
    page: 'home',
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
    if (!this.state.auth) {
      return <Welcome auth={this.onLogin}></Welcome>;
    }
    if (this.state.auth) {
      return <Home logout={this.logout}></Home>;
    }
  }
}

export default App;
