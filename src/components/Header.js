import logo from "../images/logo.svg";
import { Routes, Route, Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип 'Место'" />
      {props.loggedIn ? (
        <div className="header__menu">
          <p className="header__user-email">{props.userEmail}</p>
          <Link to="/sign-in" className="header__link header__link_sign-out" onClick={props.onSignOut}>Выйти</Link>
        </div>
      ) : (
        <>
          {
            <Routes>
              <Route
                path="/sign-up"
                element={
                  <Link to="/sign-in" className="header__link">
                    Войти
                  </Link>
                }
              />
            </Routes>
          }
          {
            <Routes>
              <Route
                path="/sign-in"
                element={
                  <Link to="/sign-up" className="header__link">
                    Регистрация
                  </Link>
                }
              />
            </Routes>
          }
        </>
      )}
    </header>
  );
}
export default Header;
