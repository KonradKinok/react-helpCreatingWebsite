import { Button_reduxToolkit } from "../Button_reduxToolkit/Button_reduxToolkit";
import css from "./TaskForm.module.css";
// Importujemy hook
import { useDispatch } from "react-redux";
// Importujemy generator akcji 
import { addTask } from "../../redux_reduxToolkit/actions_reduxToolkit.js.backup";

export const TaskForm_reduxToolkit = () => {
  // Otrzymujemy odnośnik do funkcji wysyłania
  const dispatch = useDispatch();


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // Wywołujemy generator akcji i przekazujemy tekst zadania dla payload
    // Wysyłamy wynik - akcję utworzenia zadania
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button_reduxToolkit type="submit">Add task</Button_reduxToolkit>
    </form>
  );
};
