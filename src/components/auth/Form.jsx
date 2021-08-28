import React, { useContext } from "react";
import Input from "../input/Common";
import { Button, Link } from "@material-ui/core";
import { AuthContext } from '../../context/auth';
import PropTypes from "prop-types";
import "./Form.css";

const Form = (props) => {

  const {logIn} = useContext(AuthContext);

  const authenticate = (event) => {
    event.preventDefault();
    
    const { email, password } = event.target;
    logIn(email.value, password.value)
  }

    return (
      <form className="auth-form common-form" onSubmit={authenticate}>
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
          className={"auth-form__row auth-form__row_margin-bottom__small"}
          type={"password"}
          name={"password"}
        />
        <div className="auth-form__row auth-form__row_margin-bottom__big auth-form__forgot-wrap">
          <Link className="common-link" color="primary" type="button">Забыли пароль?</Link>
        </div>
        <div className="auth-form__row auth-form__row_margin-bottom__medium">
          <Button className="button-common auth-form__button" color="primary" type="submit" data-testid="submitButton">Войти</Button>
        </div>
        <div className="auth-form__row auth-form__newbee-line">
          Новый пользователь?&nbsp;
          <Link className="uncommon-link" color="primary" type="button" onClick={props.registerRoute}>
            Регистрация
          </Link>
        </div>
      </form>
    );
  }

  
Form.propTypes = {
  registerRoute: PropTypes.func
}

export default Form;
