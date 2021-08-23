import { React, Component } from "react";
import AuthForm, { AuthFormWithAuth } from "../components/auth/Form";
import RegisterForm, { RegisterFormWithAuth } from "../components/register/Form";

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
      register: (
        <RegisterFormWithAuth authRoute={() => this.goTo("login")} />
      ),
    };

    return (
      <>
        <div className="welcome">
          <div className="logo">
            <img src="" alt="" className="logo" />
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
