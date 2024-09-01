
import { NavigationUser } from "../NavigationUser/NavigationUser";
import { UserMenuUser } from "../UserMenuUser/UserMenuUser";
import { AuthNavUser } from "../AuthNavUser/AuthNavUser";

// import { useAuthUser } from "../hooksUser/useAuthUser";
import { useAuthUser } from "../hooksUser";
import css from "./AppBarUser.module.css";

export const AppBarUser = () => {
  const { isLoggedIn } = useAuthUser();

  return (
    <header className={css.header}>
      <NavigationUser />
      {isLoggedIn ? <UserMenuUser /> : <AuthNavUser />}
    </header>
  );
};
