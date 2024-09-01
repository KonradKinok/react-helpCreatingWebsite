import { NavLink } from "react-router-dom";
import { useAuthUser } from "../hooksUser";
import css from "./NavigationUser.module.scss";

export const NavigationUser = () => {
  const { isLoggedIn } = useAuthUser();

  return (
    <nav>
      <NavLink className={css.link} to="">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="tasks">
          Tasks
        </NavLink>
      )}
    </nav>
  );
};
