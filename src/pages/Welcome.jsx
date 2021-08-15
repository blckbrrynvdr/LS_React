import { React, Component } from 'react';
import AuthForm from '../components/auth/Form';
import RegisterForm from '../components/register/Form';

class Welcome extends Component {
  state = {
    link: 'login',
  };

  goTo = (link) => {
    this.setState({ link: link });
  };

  render() {
    const components = {
      login: (
        <AuthForm
          submitHandler={this.props.auth}
          registerHandler={() => {
            this.goTo('register');
          }}
        ></AuthForm>
      ),
      register: (
        <RegisterForm
          submitHandler={this.props.auth}
          authHandler={() => this.goTo('login')}
        ></RegisterForm>
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
