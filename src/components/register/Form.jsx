import { Component } from "react";
import { withAuth } from "../context/withAuth";
import Input from "../input/Common";

class Form extends Component {

  authenticate = (event) => {
    event.preventDefault();

    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  }

  render () {
  return (
    <form className="register-form" onSubmit={this.authenticate}>
      <h2 className="register-form__title">Регистрация</h2>
      <Input
        id={"email"}
        labelText={"Email*"}
        className={"register-form__row"}
        type={"email"}
        name={"email"}
      />
      <Input
        id={"name"}
        labelText={"Как вас зовут?*"}
        className={"register-form__row"}
        type={"text"}
        name={"name"}
      />
      <Input
        id={"password"}
        labelText={"Придумайте пароль*"}
        className={"register-form__row"}
        type={"password"}
        name={"password"}
      />
      <div className="register-form__row">
        <button type="submit">Зарегистрироваться</button>
      </div>
      <div className="register-form__row">
        Уже зарегестрированны?{" "}
        <button type="button" onClick={this.props.authRoute}>
          Войти
        </button>
      </div>
    </form>
  );}
};

export default Form;
export const RegisterFormWithAuth = withAuth(Form);