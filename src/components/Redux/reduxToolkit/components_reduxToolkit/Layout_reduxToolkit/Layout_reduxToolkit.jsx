import css from "./Layout.module.css";

export const Layout_reduxToolkit = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};
