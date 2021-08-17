import Input from "../input/Common";

const Form = (props) => {
  return (
    <form className="register-form" onSubmit={props.submitHandler}>
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
        name={"email"}
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
        <button type="button" onClick={props.authHandler}>
          Войти
        </button>
      </div>
    </form>
  );
};

export default Form;
