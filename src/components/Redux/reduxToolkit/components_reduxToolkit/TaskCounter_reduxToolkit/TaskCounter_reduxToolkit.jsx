import css from "./TaskCounter.module.css";
import { selectTasks } from "../../redux_reduxToolkit/selectors_reduxToolkit";
// Importujemy hook
import { useSelector } from "react-redux";
export const TaskCounter_reduxToolkit = () => {
  // Otrzymujemy tablicę zadań ze statusu Redux
  const tasks = useSelector(selectTasks);

  // Na bazie stausu Redux otrzymujemy dane pochodne
  const count = tasks.reduce(
    (acc, task) => {
      if (task.complet) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p>Active: {count.active}</p>
      <p>Completed: {count.completed}</p>
    </div>
  );
};
