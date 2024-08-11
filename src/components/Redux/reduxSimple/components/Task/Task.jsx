import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
// Importujemy hook 
import { useDispatch } from "react-redux";
// Importujemy generator akcji
import { deleteTask, toggleCompleted } from "../../redux/actions";

export const Task = ({ task }) => {
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
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
