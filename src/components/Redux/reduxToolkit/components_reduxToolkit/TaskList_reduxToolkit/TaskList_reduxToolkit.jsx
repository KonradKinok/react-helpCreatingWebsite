// Importujemy hook
import { useSelector } from "react-redux";
import { Task_reduxToolkit } from "../Task_reduxToolkit/Task_reduxToolkit";
// Importujemy obiekt wartości filtra
import { statusFilters_reduxToolkit } from "../../redux_reduxToolkit/constants_reduxToolkit";
import { getTasks, getStatusFilter } from "../../redux_reduxToolkit/selectors_reduxToolkit";
import css from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilters) => {
  switch (statusFilters) {
    case statusFilters_reduxToolkit.active:
      return tasks.filter(task => !task.completed);
    case statusFilters_reduxToolkit.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList_reduxToolkit = () => {
  // Otrzymujemy tablicę zadań ze statusu Redux
  const tasks = useSelector(getTasks);
  // Otrzymujemy wartość filtra ze statusu Redux
  const statusFilter = useSelector(getStatusFilter);
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
