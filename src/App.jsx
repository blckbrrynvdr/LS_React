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
    return (
      <>
        { !this.state.auth && <Welcome auth={this.onLogin} /> }
        { this.state.auth && <Home logout={this.logout} /> }
      </>
    )
  }
}

export default App;
