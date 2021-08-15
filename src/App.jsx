import React from "react";
import { Profile } from "./Profile";
import { Home } from "./Home";
import { About } from "./About";
import "./App.css";

const PAGES = {
  home: <Home />,
  about: <About />,
  profile: <Profile />,
};

class App extends React.Component {
  state = { currentPage: "home" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button onClick={() => {this.navigateTo("home")}}>home</button>
              </li>
              <li>
                <button onClick={() => {this.navigateTo("about")}}>about</button>
              </li>
              <li>
                <button onClick={() => {this.navigateTo("profile")}}>profile</button>
              </li>
            </ul>
          </nav>
        </header>
        <main data-testid="container">
          <section>{PAGES[this.state.currentPage]}</section>
        </main>
      </>
    );
  }
}

export default App;
