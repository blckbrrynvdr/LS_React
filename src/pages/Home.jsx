import { React, Component } from 'react';
import Map from '../components/map/Map';
import Profile from '../components/profile/Profile';

class Home extends Component {
  state = {
    link: 'map',
  };

  goTo = (link) => {
    this.setState({ link: link });
  };

  render() {
    const links = {
      map: <Map></Map>,
      profile: <Profile></Profile>,
    };
    return (
      <div className="home">
        <nav className="nav">
          <button className="nav__button" onClick={() => { this.goTo("map") }}>
            Карта
          </button>
          <button className="nav__button" onClick={() => { this.goTo("profile") }}>
            Профиль
          </button>
          <button className="nav__button" onClick={this.props.logout}>
            Выйти
          </button>
        </nav>
        <div className="home__sections">{links[this.state.link]}</div>
      </div>
    );
  }
}

export default Home;
