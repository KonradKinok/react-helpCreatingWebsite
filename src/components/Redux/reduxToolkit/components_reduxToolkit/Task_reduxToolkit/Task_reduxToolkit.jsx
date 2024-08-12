import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
// Importujemy hook 
import { useDispatch } from "react-redux";
// Importujemy generator akcji
import { deleteTask, toggleCompleted } from "../../redux_reduxToolkit/tasksSlice";

export const Task_reduxToolkit = ({ task }) => {
  // Otrzymujemy odnośnik do funkcji wysłania akcji
  const dispatch = useDispatch();

  // Wywołujemy generator akcji i przekazujemy identyfikator zadania
  // Wysyłamy wynik - akcję usunięcia zadania
  const handleDelete = () => dispatch(deleteTask(task.id));

  // Wywołujemy generator akcji i przekazujemy identyfikator zadania
  // Wysyłamy wynik - akcję przełączania statusu zadania
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.complet}
      />
      <p className={css.text}>{task.text} xxx {formatDateAndHour(task.date)} </p>
      <p className={css.text}>
        Pola obiektu: {Object.keys(task).join(', ')}
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
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${day}.${month}.${year}y. ${hour}:${minutes}:${seconds}`;
};