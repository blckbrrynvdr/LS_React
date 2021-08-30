import { React, Component } from 'react';
import Map from '../components/map/Map';
import Profile from '../components/profile/Profile';
import Nav from '../components/nav/Nav';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from '../store/actions/authorization';

class Home extends Component {

  static propTypes = {
    logOut: PropTypes.func,
  }

  state = {
    link: "map",
  };

  goTo = (link) => {
    this.setState({ link: link });
  };

  render() {
    const navButtons = [
      {
        id: 1,
        name: "Карта",
        link: "map",
        clickHandler: this.goTo,
      },
      {
        id: 2,
        name: "Профиль",
        link: "profile",
        clickHandler: this.goTo,
      },
      {
        id: 3,
        name: "Выйти",
        clickHandler: this.props.logOut,
      },
    ];

    return (
      <div className="home">
        <Nav buttons={navButtons} />
        <div className="home__sections">
          {this.state.link === "map" && <Map />}
          {this.state.link === "profile" && <Profile />}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { logOut }
)(Home);
