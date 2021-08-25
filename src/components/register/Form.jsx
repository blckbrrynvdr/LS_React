import { Component } from "react";
import { withAuth } from "../context/withAuth";
import Input from "../input/Common";
import { Button, Link } from "@material-ui/core";
import PropTypes from "prop-types";
import "./Form.css";

class Form extends Component {

  static propTypes = {
    authRoute: PropTypes.func,
    logIn: PropTypes.func,
  }

  authenticate = (event) => {
    event.preventDefault();

    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  }

  render () {
    return (
      <form className="register-form common-form" onSubmit={this.authenticate}>
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
          className={"register-form__row register-form__row_margin-bottom__big"}
          type={"password"}
          name={"password"}
        />
        <div className="register-form__row">
          <Button className="button-common register-form__button" color="primary" type="submit">Зарегистрироваться</Button>
        </div>
        <div className="register-form__row register-form__newbee-line">
          Уже зарегестрированны?&nbsp;
          <Link className="uncommon-link" color="primary" type="button" onClick={this.props.authRoute}>
            Войти
          </Link>
        </div>
      </form>
    );
  }
};

export default Form;
export const RegisterFormWithAuth = withAuth(Form);