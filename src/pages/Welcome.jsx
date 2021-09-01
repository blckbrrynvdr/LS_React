import { React, Component } from "react";
import RegisterForm from "../components/register/Form";
import Logo from "../components/logo/LoftTaxi";
import AuthForm from '../components/auth/Form';
import { Route, Switch } from "react-router-dom";

class Welcome extends Component {

  render() {

    return (
      <>
        <div className="welcome">
          <div className="welcome__logo-box">
            <Logo />
          </div>
          <div className="welcome__container">
            <Switch>
              <Route exact path="/" component={ AuthForm } />
              <Route exact path="/register" component={ RegisterForm } />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default Welcome;
