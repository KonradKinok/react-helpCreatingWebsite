// Importujemy hook
import { useSelector } from "react-redux";
import { Task_asyncRed } from "../Task_asyncRed/Task_asyncRed";
// Importujemy obiekt wartości filtra
// import { statusFilters_reduxToolkit } from "../../redux_reduxToolkit/constants_reduxToolkit";
import { getAsyncTasks } from "../../reduxToolkit/redux_reduxToolkit/selectors_reduxToolkit";
import css from "./TaskList.module.css";

// const getVisibleTasks = (tasks, statusFilters) => {
//   switch (statusFilters) {
//     case statusFilters_reduxToolkit.active:
//       return tasks.filter(task => !task.complet);
//     case statusFilters_reduxToolkit.complety:
//       return tasks.filter(task => task.complet);
//     default:
//       return tasks;
//   }
// };

export const TaskList_asyncRed = () => {
  // Otrzymujemy tablicę zadań ze statusu Redux
  const asyncTasks = useSelector(getAsyncTasks);
  // Otrzymujemy wartość filtra ze statusu Redux
  // const statusFilter = useSelector(getStatusFilter);
  console.log("TaskList_asyncRed -> asyncTasks", (asyncTasks))
  // Obliczamy tablicę zadań, które należy wyświetlić w interfejsie
  // const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <ul className={css.list}>
      {asyncTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task_asyncRed asyncTasks={task} />

        </li>
      ))}
    </ul>
  );
};
