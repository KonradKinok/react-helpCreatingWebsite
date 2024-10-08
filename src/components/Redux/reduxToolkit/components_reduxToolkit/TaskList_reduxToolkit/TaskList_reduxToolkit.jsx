// Importujemy hook
import { useSelector } from "react-redux";
import { Task_reduxToolkit } from "../Task_reduxToolkit/Task_reduxToolkit";
// Importujemy obiekt wartości filtra
import { statusFilters_reduxToolkit } from "../../redux_reduxToolkit/constants_reduxToolkit";
import { selectTasks, selectStatusFilter } from "../../redux_reduxToolkit/selectors_reduxToolkit";
import css from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilters) => {
  switch (statusFilters) {
    case statusFilters_reduxToolkit.active:
      return tasks.filter(task => !task.complet);
    case statusFilters_reduxToolkit.complety:
      return tasks.filter(task => task.complet);
    default:
      return tasks;
  }
};

export const TaskList_reduxToolkit = () => {
  // Otrzymujemy tablicę zadań ze statusu Redux
  const tasks = useSelector(selectTasks);
  // Otrzymujemy wartość filtra ze statusu Redux
  const statusFilter = useSelector(selectStatusFilter);

  // Obliczamy tablicę zadań, które należy wyświetlić w interfejsie
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task_reduxToolkit task={task} />

        </li>
      ))}
    </ul>
  );
};
