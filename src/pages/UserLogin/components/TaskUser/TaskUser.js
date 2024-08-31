import { useDispatch } from "react-redux";
import { deleteTask } from "../reduxUser/tasksUser/operationsUser.tasks";
import css from "./TaskUser.module.css";

export const TaskUser = ({ id, text }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
