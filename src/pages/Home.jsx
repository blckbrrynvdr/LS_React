import { React, Component } from 'react';
import Map from '../components/map/Map';
import Profile from '../components/profile/Profile';
import Nav from '../components/nav/Nav';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from '../store/actions/authorization';
import { Route, Switch } from 'react-router-dom';

class Home extends Component {

  static propTypes = {
    logOut: PropTypes.func,
  }

  render() {
    const navButtons = [
      {
        id: 1,
        name: "Карта",
        link: "/home",
      },
      {
        id: 2,
        name: "Профиль",
        link: "/home/profile",
      },
      {
        id: 3,
        name: "Выйти",
        link: "/",
        clickHandler: this.props.logOut,
      },
    ];

    return (
      <div className="home">
        <Nav buttons={navButtons} />
        <div className="home__sections">
          <Switch>
            <Route exact path={this.props.match.url} component={Map} />
            <Route exact path={this.props.match.url + "/profile"} component={Profile} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { logOut }
)(Home);