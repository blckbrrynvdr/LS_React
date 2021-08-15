import React from "react";
// import { Profile } from "./components/profile/Profile";
// import { Home } from "./components/home/Home";
// import { About } from "./components/about/About";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import "./App.css";

// const PAGES = {
//   home: <Home />,
//   about: <About />,
//   profile: <Profile />,
// };

class App extends React.Component {
  state = { 
    page: 'home',
    auth: false,
   };

   

  navigateTo = (page) => {
    if (!this.auth) {
      this.setState({ page: 'welcome' });
    }
    if (this.auth) {
      this.setState({ page: 'home' });
    }

    this.setState({ page: page });
    
  };

  onLogin = (e) => {
    e.preventDefault();
    console.log('app on login ', this.state.page);
    this.setState({auth: true});
    // this.setState({ page: 'home', auth: true });
  }

  logout = () => {
    this.setState({auth: false});
  }

  render() {
    if (!this.state.auth) {
      return (
          <Welcome auth={this.onLogin}></Welcome>
      );
    }
    if (this.state.auth) {
      return (
        <Home logout={this.logout}></Home>
      );
    }
    // return (

      // <>
      //   <header>
      //     <nav>
      //       <ul>
      //         <li>
      //           <button onClick={() => {this.navigateTo("home")}}>home</button>
      //         </li>
      //         <li>
      //           <button onClick={() => {this.navigateTo("about")}}>about</button>
      //         </li>
      //         <li>
      //           <button onClick={() => {this.navigateTo("profile")}}>profile</button>
      //         </li>
      //       </ul>
      //     </nav>
      //   </header>
      //   <main data-testid="container">
          /*{ <section>{PAGES[this.state.currentPage]}</section> }*/
      //   </main>
      // </>
    // );
  }
}

export default App;
