import { React, Component } from "react";
import RegisterForm from "../components/register/Form";
import Logo from "../components/logo/LoftTaxi";
import AuthForm from '../components/auth/Form';

class Welcome extends Component {
  state = {
    link: "login",
  };

  goTo = (link) => {
    this.setState({ link: link });
  };

  render() {
    const components = {
      login: <AuthForm registerRoute={() => this.goTo("register")} />,
      register:  <RegisterForm authRoute={() => this.goTo("login")} /> ,
    };

    return (
      <>
        <div className="welcome">
          <div className="welcome__logo-box">
            <Logo />
          </div>
          <div className="welcome__container">
            {components[this.state.link]}
          </div>
        </div>
      </>
    );
  }
}

export default Welcome;
