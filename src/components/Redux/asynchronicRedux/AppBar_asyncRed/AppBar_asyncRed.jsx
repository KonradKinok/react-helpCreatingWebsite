import { TaskCounter_asyncRed } from "../TaskCounter_asyncRed/TaskCounter_asyncRed";
import { StatusFilter_asyncRed } from "../StatusFilter_asyncRed/StatusFilter_asyncRed";
import css from "./AppBar.module.css";

export const AppBar_asyncRed = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks reduxToolkit</h2>
        <TaskCounter_asyncRed />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter_asyncRed />
      </section>
    </header>
  );
};
