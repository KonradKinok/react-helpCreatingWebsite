import React, { useEffect, useRef } from 'react';
import { useDispatch } from "react-redux";
import { logIn } from "../reduxUser/authUser/operationsUser.auth";
import css from "./LoginFormUser.module.scss";

export const LoginFormUser = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
    form.reset();
  };

  useEffect(() => {
    emailRef.current.defaultValue = "marek.kowal@gmail.com";
    passwordRef.current.defaultValue = "marekkowal2024"
  }, []);

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" ref={emailRef} />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" ref={passwordRef} />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
