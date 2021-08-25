import { Component } from "react";
import Input from "../input/Common";
import { withAuth } from "../context/withAuth";
import { Button, Link, FormLabel } from "@material-ui/core";

class Form extends Component {

  authenticate = (event) => {
    event.preventDefault();

    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  }

  render() {
    return (
      <form className="auth-form" onSubmit={this.authenticate}>
        <FormLabel>
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
            <Link color="primary" type="button">Забыли пароль?</Link>
          </div>
          <div className="auth-form__row">
            <Button color="primary" type="submit" data-testid="submitButton">Войти</Button>
          </div>
          <div className="auth-form__row">
            Новый пользователь?
            <Link color="primary" type="button" onClick={this.props.registerRoute}>
              Регистрация
            </Link>
          </div>
        </FormLabel>
      </form>
    );
  }
}

export default Form;
export const AuthFormWithAuth = withAuth(Form);
