import Input from "../input/Common";
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import "./Form.css";
import { connect } from 'react-redux';
import { registration } from '../../store/actions/authorization';
import { useForm } from 'react-hook-form';

export const Form = (props) => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const registration = (data) => {
    const { email, password, name, surname } = data;
   
    props.registration(email, password, name, surname);
  }

  return (
    <form className="register-form common-form" onSubmit={handleSubmit(registration)}>
      <h2 className="register-form__title">Регистрация</h2>
      <Input
        id={"email"}
        labelText={"Email*"}
        className={"register-form__row"}
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
        id={"name"}
        labelText={"Имя?*"}
        className={"register-form__row"}
        type={"text"}
        name={"name"}
        {...register("name", {
          required: 'Обязательное поле',
          minLength: {
            value: 2,
            message: "Имя должен быть больше 2 символов"
          },
        })}
        error={!!errors.name}
        helperText={errors.name && errors.name.message}
      />
      <Input
        id={"surname"}
        labelText={"Фамилия?*"}
        className={"register-form__row"}
        type={"text"}
        name={"surname"}
        {...register("surname", {
          required: 'Обязательное поле',
          minLength: {
            value: 2,
            message: "Фамилия должна быть больше 2 символов"
          },
        })}
        error={!!errors.surname}
        helperText={errors.surname && errors.surname.message}
      />
      <Input
        id={"password"}
        labelText={"Придумайте пароль*"}
        className={"register-form__row register-form__row_margin-bottom__big"}
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
  };

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { registration }
)(Form);

