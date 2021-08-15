const Form = (props) => {
  
  return (
    <form className="auth-form" onSubmit={props.submitHandler}>
      <h2 className="auth-form__title">Регистрация</h2>
      <div className="auth-form__row">
        <label htmlFor="email">Email*</label>
        <input id="email" type="email" name="email" />
      </div>
      <div className="auth-form__row">
        <label htmlFor="email">Как вас зовут?*</label>
        <input id="name" type="text" name="name" />
      </div>

      <div className="auth-form__row">
        <label htmlFor="password">Придумайте пароль*</label>
        <input id="password" type="password" name="password" />
      </div>

      <div className="auth-form__row">
        <button type="submit">Зарегистрироваться</button>
      </div>
      <div className="auth-form__row">
        Уже зарегестрированны?  <button type="button" onClick={props.authHandler}>Войти</button>
      </div>
    </form>
  );
};

export default Form;
