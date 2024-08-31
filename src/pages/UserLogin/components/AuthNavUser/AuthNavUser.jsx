import { NavLink } from "react-router-dom";
import css from "./AuthNavUser.module.scss";

export const AuthNavUser = () => {
  return (
    <div>
      <NavLink className={css.link} to="register">
        Register
      </NavLink>
      <NavLink className={css.link} to="login">
        Log In
      </NavLink>
    </div>
  );
};
