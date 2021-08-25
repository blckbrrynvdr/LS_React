import { React, Component } from "react";
import { AuthFormWithAuth } from "../components/auth/Form";
import {Logo} from 'loft-taxi-mui-theme';
import { RegisterFormWithAuth } from "../components/register/Form";

class Welcome extends Component {
  state = {
    link: "login",
  };

  goTo = (link) => {
    this.setState({ link: link });
  };

  render() {
    const components = {
      login: <AuthFormWithAuth registerRoute={() => this.goTo("register")} />,
      register:  <RegisterFormWithAuth authRoute={() => this.goTo("login")} /> ,
    };

    return (
      <>
        <div className="welcome">
          <Logo />
          <div className="welcome__container">
            {components[this.state.link]}
          </div>
        </div>
      </>
    );
  }
}

export default Welcome;
