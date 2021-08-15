const Form = (props) => {
  
  return (
    <form className="auth-form" onSubmit={props.submitHandler}>
      <h2 className="auth-form__title">Войти</h2>
      <div className="auth-form__row">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="auth-form__row">
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
      </div>
      <div className="auth-form__row">
        <button type="button">Забыли пароль?</button>
      </div>
      <div className="auth-form__row">
        <button type="submit">Войти</button>
      </div>
      <div className="auth-form__row">
        Новый пользователь? <button type="button" onClick={props.registerHandler}>Регистрация</button>
      </div>
    </form>
  );
};

export default Form;
