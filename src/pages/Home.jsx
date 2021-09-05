import { React, Component } from 'react';
import Map from '../components/map/Map';
import Profile from '../components/profile/Profile';
import Nav from '../components/nav/Nav';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from '../store/actions/authorization';
import { getCardData } from "../store/actions/card";
import { Route, Switch } from 'react-router-dom';

class Home extends Component {

  componentDidMount() {
    this.props.getCardData(this.props.token);
  }

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
            {/* <Route exact path={this.props.match.url} component={Map} /> */}
            <Route exact path={this.props.match.url + "/profile"} component={Profile} />
          </Switch>
          <Map />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn, 
  token: state.auth.token
})

export default connect(
  mapStateToProps,
  { logOut, getCardData }
)(Home);