import { useDispatch } from "react-redux";
import { register } from "../reduxUser/authUser/operationsUser.auth";
import css from "./RegisterFormUser.module.scss";

export const RegisterFormUser = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" defaultValue="Konrad" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" defaultValue="Konrad@gmail.com" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" defaultValue="konik" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
