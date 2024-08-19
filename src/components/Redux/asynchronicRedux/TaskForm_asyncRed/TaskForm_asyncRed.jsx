import { Button_asyncRed } from "../Button_asyncRed/Button_asyncRed";
import css from "./TaskForm.module.css";
// Importujemy hook
import { useDispatch } from "react-redux";
// Importujemy generator akcji 
import { addTask } from "../../reduxToolkit/redux_reduxToolkit/operations";

export const TaskForm_asyncRed = () => {
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
      <Button_asyncRed type="submit">Add task</Button_asyncRed>
    </form>
  );
};

