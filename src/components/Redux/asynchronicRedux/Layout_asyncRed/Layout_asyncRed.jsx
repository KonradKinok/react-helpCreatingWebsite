import css from "./Layout.module.css";

export const Layout_asyncRed = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};
