import { Button_reduxToolkit } from "../Button_reduxToolkit/Button_reduxToolkit";
import css from "./StatusFilter.module.css";

// Importujemy hook
import { useSelector, useDispatch } from "react-redux";
// Importujemy generator akcji
import { setStatusFilter } from "../../redux_reduxToolkit/actions_reduxToolkit.js.backup";
// Importujemy obiekt wartości filtra
import { statusFilters_reduxToolkit } from "../../redux_reduxToolkit/constants_reduxToolkit";
import { getStatusFilter } from "../../redux_reduxToolkit/selectors_reduxToolkit";
export const StatusFilter_reduxToolkit = () => {
  // Otrzymujemy odnośnik do funkcji wysyłania akcji
  const dispatch = useDispatch();
  // Otrzymujemy wartość filtra ze statusu Redux
  const filter = useSelector(getStatusFilter);
  // Wywołujemy generator akcji i przekazujemy wartość filtra
  // Wysyłamy wynik - akcja zmiany filtra
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button_reduxToolkit
        selected={filter === statusFilters_reduxToolkit.all}
        onClick={() => handleFilterChange(statusFilters_reduxToolkit.all)}>
        All
      </Button_reduxToolkit>
      <Button_reduxToolkit selected={filter === statusFilters_reduxToolkit.active} onClick={() => handleFilterChange(statusFilters_reduxToolkit.active)}>Active</Button_reduxToolkit>
      <Button_reduxToolkit selected={filter === statusFilters_reduxToolkit.completed} onClick={() => handleFilterChange(statusFilters_reduxToolkit.completed)}>Completed</Button_reduxToolkit>
    </div>
  );
};