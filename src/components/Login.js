import React from "react";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="auth-container">
      <form
        className="form form_type_auth"
        name="login_form"
        method="post"
        onSubmit={props.onSubmit}
      >
        <h2 className="form__title">Вход</h2>
        <fieldset className="form__field">
          <input
            className="form__input form__input_type_auth form__input_type_email"
            type="email"
            placeholder="Email"
            name="email"
            minLength="2"
            maxLength="30"
            value={email || ""}
            onChange={handleChangeEmail}
            required
          />
          <span className="form__input-error email-error"></span>
        </fieldset>
        <fieldset className="form__field">
          <input
            className="form__input form__input_type_auth form__input_type_password"
            type="password"
            placeholder="Пароль"
            name="password"
            value={password || ""}
            onChange={handleChangePassword}
            required
          />
          <span className="form__input-error password-error"></span>
        </fieldset>
        <button type="submit" className="button button_type_auth">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
