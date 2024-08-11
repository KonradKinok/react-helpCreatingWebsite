import { StatusFilter_reduxToolkit } from "../StatusFilter_reduxToolkit/StatusFilter_reduxToolkit";
import { TaskCounter_reduxToolkit } from "../TaskCounter_reduxToolkit/TaskCounter_reduxToolkit";
import css from "./AppBar.module.css";

export const AppBar_reduxToolkit = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks reduxToolkit</h2>
        <TaskCounter_reduxToolkit />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter_reduxToolkit />
      </section>
    </header>
  );
};
