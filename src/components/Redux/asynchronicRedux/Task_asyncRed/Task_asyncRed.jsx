import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
// Importujemy hook 
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../reduxToolkit/redux_reduxToolkit/operations";
// Importujemy generator akcji
// import { deleteTask, toggleCompleted } from "../../redux_reduxToolkit/tasksSlice";

export const Task_asyncRed = ({ asyncTasks }) => {
  // Otrzymujemy odnośnik do funkcji wysłania akcji
  const dispatch = useDispatch();

  // Wywołujemy generator akcji i przekazujemy identyfikator zadania
  // Wysyłamy wynik - akcję usunięcia zadania
  const handleDelete = () => dispatch(deleteTask(asyncTasks.id));

  // Wywołujemy generator akcji i przekazujemy identyfikator zadania
  // Wysyłamy wynik - akcję przełączania statusu zadania
  const handleToggle = () => dispatch(toggleCompleted(asyncTasks));
  console.log("Task_asyncRed -> Task_asyncRed -> asyncTasks.id", asyncTasks.id)
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={asyncTasks.completed}
      />
      <p className={css.text}>{asyncTasks.text} xxx  </p>
      <p className={css.text}>
        Pola obiektu: {Object.keys(asyncTasks).join(', ')}
      </p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};


export function formatDateAndHour(dateStr) {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Miesiące są indeksowane od 0
  const year = date.getFullYear();
  const hour = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${day}.${month}.${year}y. ${hour}:${minutes}:${seconds}`;
};