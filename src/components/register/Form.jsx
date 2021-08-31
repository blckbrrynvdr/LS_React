import { Component } from "react";
import Input from "../input/Common";
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import "./Form.css";
import { connect } from 'react-redux';
import { registration } from '../../store/actions/authorization';

class Form extends Component {

  static propTypes = {
    authRoute: PropTypes.func,
    logIn: PropTypes.func,
  }

  registration = (event) => {
    event.preventDefault();
    const { email, password, name, surname } = event.target;
    console.log('inform',email.value, password.value, name.value, surname.value);
    this.props.registration(email.value, password.value, name.value, surname.value);
  }

  render () {
    return (
      <form className="register-form common-form" onSubmit={this.registration}>
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
          labelText={"Имя?*"}
          className={"register-form__row"}
          type={"text"}
          name={"name"}
        />
        <Input
          id={"surname"}
          labelText={"Фамилия?*"}
          className={"register-form__row"}
          type={"text"}
          name={"surname"}
        />
        <Input
          id={"password"}
          labelText={"Придумайте пароль*"}
          className={"register-form__row register-form__row_margin-bottom__big"}
          type={"password"}
          name={"password"}
        />
        <div className="register-form__row">
          <Button 
            className="button-common register-form__button" 
            color="primary" 
            type="submit"
            data-testid="submitButton"
           >Зарегистрироваться</Button>
        </div>
        <div className="register-form__row register-form__newbee-line">
          Уже зарегестрированны?&nbsp;
          <Link className="uncommon-link" color="primary" type="button" to="/">
            Войти
          </Link>
        </div>
      </form>
    );
  }
};

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { registration }
)(Form);