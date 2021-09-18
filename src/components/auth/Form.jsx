import React from 'react';
import Input from '../input/Common';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Form.css';
import { connect } from 'react-redux';
import { authenticate } from '../../store/actions/authorization';
import { useForm } from 'react-hook-form';


export const Form = (props) => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    props.authenticate(email, password);
  }
    return (
      <form className="auth-form common-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="auth-form__title">Войти</h2>
        {props.error && <div style={{textAlign:'center',color:'red'}}>{props.error}</div>}
        <Input
          id={"email"}
          labelText={"Email:"}
          className={"auth-form__row"}
          type={"email"}
          name={"email"}
          {...register("email", {
            required: 'Обязательное поле',
            minLength: {
              value: 5,
              message: "Email должен быть больше 5 символов"
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Некорректный email"
            }
          })}
          error={!!errors.email}
          helperText={errors.email && errors.email.message}
        />
        <Input
          id={"password"}
          labelText={"Password:"}
          className={"auth-form__row auth-form__row_margin-bottom__small"}
          type={"password"}
          name={"password"}
          {...register("password", {
            required: 'Обязательное поле',
            minLength: {
              value: 5,
              message: "Пароль должен быть больше 5 символов"
            },
          })}
          error={!!errors.password}
          helperText={errors.password && errors.password.message}
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

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  error: state.auth.error,
})

export default connect(
  mapStateToProps,
  { authenticate }
)(Form);
