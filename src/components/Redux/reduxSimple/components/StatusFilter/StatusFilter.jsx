import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";

// Importujemy hook
import { useSelector, useDispatch } from "react-redux";
// Importujemy generator akcji
import { setStatusFilter } from "../../redux/actions";
// Importujemy obiekt wartości filtra
import { statusFilters } from "../../redux/constants";
import { getStatusFilter } from "../../redux/selectors";
export const StatusFilter = () => {
  // Otrzymujemy odnośnik do funkcji wysyłania akcji
  const dispatch = useDispatch();
  // Otrzymujemy wartość filtra ze statusu Redux
  const filter = useSelector(getStatusFilter);
  // Wywołujemy generator akcji i przekazujemy wartość filtra
  // Wysyłamy wynik - akcja zmiany filtra
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all} onClick={() => handleFilterChange(statusFilters.all)}>All</Button>
      <Button selected={filter === statusFilters.active} onClick={() => handleFilterChange(statusFilters.active)}>Active</Button>
      <Button selected={filter === statusFilters.completed} onClick={() => handleFilterChange(statusFilters.completed)}>Completed</Button>
    </div>
  );
};