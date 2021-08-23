import { Component } from "react";
import Input from "../input/Common";
import { withAuth } from "../context/withAuth";

class Form extends Component {

  authenticate = (event) => {
    event.preventDefault();

    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  }

  render() {
    return (
      <form className="auth-form" onSubmit={this.authenticate}>
        <h2 className="auth-form__title">Войти</h2>
        <Input
          id={"email"}
          labelText={"Email:"}
          className={"auth-form__row"}
          type={"email"}
          name={"email"}
        />
        <Input
          id={"password"}
          labelText={"Password:"}
          className={"auth-form__row"}
          type={"password"}
          name={"password"}
        />
        <div className="auth-form__row">
          <button type="button">Забыли пароль?</button>
        </div>
        <div className="auth-form__row">
          <button type="submit">Войти</button>
        </div>
        <div className="auth-form__row">
          Новый пользователь?
          <button type="button" onClick={this.props.registerRoute}>
            Регистрация
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
export const AuthFormWithAuth = withAuth(Form);
