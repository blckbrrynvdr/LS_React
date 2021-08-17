import Input from "../input/Common";

const Form = (props) => {
  return (
    <form className="auth-form" onSubmit={props.submitHandler}>
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
        <button type="button">Забыли пароль?</button>
      </div>
      <div className="auth-form__row">
        <button type="submit">Войти</button>
      </div>
      <div className="auth-form__row">
        Новый пользователь?{" "}
        <button type="button" onClick={props.registerHandler}>
          Регистрация
        </button>
      </div>
    </form>
  );
};

export default Form;
