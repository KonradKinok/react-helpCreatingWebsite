import { Button_reduxToolkit } from "../Button_reduxToolkit/Button_reduxToolkit";
import css from "./StatusFilter.module.css";

// Importujemy hook
import { useSelector, useDispatch } from "react-redux";
// Importujemy generator akcji
import { setStatusFilter } from "../../redux_reduxToolkit/filtersSlice";
// Importujemy obiekt wartości filtra
import { statusFilters_reduxToolkit } from "../../redux_reduxToolkit/constants_reduxToolkit";
import { selectStatusFilter } from "../../redux_reduxToolkit/selectors_reduxToolkit";
export const StatusFilter_reduxToolkit = () => {
  // Otrzymujemy odnośnik do funkcji wysyłania akcji
  const dispatch = useDispatch();
  // Otrzymujemy wartość filtra ze statusu Redux
  const filter = useSelector(selectStatusFilter);
  // Wywołujemy generator akcji i przekazujemy wartość filtra
  // Wysyłamy wynik - akcja zmiany filtra
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button_reduxToolkit
        selected={filter === statusFilters_reduxToolkit.all}
        onClick={() => handleFilterChange(statusFilters_reduxToolkit.all)}>
        All {filter}
      </Button_reduxToolkit>
      <Button_reduxToolkit selected={filter === "actives"} onClick={() => handleFilterChange("active")}>Active</Button_reduxToolkit>
      <Button_reduxToolkit selected={filter === statusFilters_reduxToolkit.complety} onClick={() => handleFilterChange(statusFilters_reduxToolkit.complety)}>Completed</Button_reduxToolkit>
    </div>
  );
};