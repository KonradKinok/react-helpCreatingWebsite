// Importujemy hook
import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
// Importujemy obiekt wartości filtra
import { statusFilters } from "../../redux/constants";
import { getTasks, getStatusFilter } from "../../redux/selectors";
import css from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
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
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
