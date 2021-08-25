import React, { useContext } from "react";
import Input from "../input/Common";
import { Button, Link } from "@material-ui/core";
import { AuthContext } from '../context/withAuth';
import PropTypes from "prop-types";

const Form = (props) => {

  const authHook = useContext(AuthContext);

  const authenticate = (event) => {
    event.preventDefault();
    
    const { email, password } = event.target;
    authHook.logIn(email.value, password.value)
  }

    return (
      <form className="auth-form" onSubmit={authenticate}>
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
          <Link color="primary" type="button" onClick={props.registerRoute}>
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
