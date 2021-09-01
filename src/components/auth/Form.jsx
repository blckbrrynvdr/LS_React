import React from 'react';
import Input from '../input/Common';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Form.css';
import { connect } from 'react-redux';
import { authenticate } from '../../store/actions/authorization';


export const Form = (props) => {

  const authenticate = (event) => {
    event.preventDefault();
    
    const { email, password } = event.target;
    props.authenticate(email.value, password.value);
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
          <Link className="common-link" color="primary" type="button" to="/forgot">Забыли пароль?</Link>
        </div>
        <div className="auth-form__row auth-form__row_margin-bottom__medium">
          <Button className="button-common auth-form__button" color="primary" type="submit" data-testid="submitButton">Войти</Button>
        </div>
        <div className="auth-form__row auth-form__newbee-line">
          Новый пользователь?&nbsp;
          <Link className="uncommon-link" color="primary" type="button" to="/register">
            Регистрация
          </Link>
        </div>
      </form>
    );
  }

  
Form.propTypes = {
  registerRoute: PropTypes.func
}

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { authenticate }
)(Form);
