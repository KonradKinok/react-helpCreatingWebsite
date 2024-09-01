import { useDispatch } from "react-redux";
import { logOut } from "../reduxUser/authUser/operationsUser.auth";
import { useAuthUser } from "../hooksUser";
import css from "./UserMenuUser.module.scss";

export const UserMenuUser = () => {
  const dispatch = useDispatch();
  const { user } = useAuthUser();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
