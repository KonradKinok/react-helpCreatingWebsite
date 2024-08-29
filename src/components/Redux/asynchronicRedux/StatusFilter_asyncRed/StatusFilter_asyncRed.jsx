import { Button_asyncRed } from "../Button_asyncRed/Button_asyncRed";
import css from "./StatusFilter.module.css";

// Importujemy hook
import { useSelector, useDispatch } from "react-redux";
// Importujemy generator akcji
import { setStatusFilter } from "../../reduxToolkit/redux_reduxToolkit/filtersSlice";
// Importujemy obiekt wartości filtra
import { statusFilters_reduxToolkit } from "../../reduxToolkit/redux_reduxToolkit/constants_reduxToolkit";
import { selectStatusFilter } from "../../reduxToolkit/redux_reduxToolkit/selectors_reduxToolkit";

export const StatusFilter_asyncRed = () => {
  // Otrzymujemy odnośnik do funkcji wysyłania akcji
  const dispatch = useDispatch();
  // Otrzymujemy wartość filtra ze statusu Redux
  const filter = useSelector(selectStatusFilter);
  console.log("StatusFilter_asyncRed -> filter:", filter)
  // Wywołujemy generator akcji i przekazujemy wartość filtra
  // Wysyłamy wynik - akcja zmiany filtra
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button_asyncRed
        selected={filter === statusFilters_reduxToolkit.all}
        onClick={() => handleFilterChange(statusFilters_reduxToolkit.all)}>
        All {filter}
      </Button_asyncRed>
      <Button_asyncRed selected={filter === "actives"} onClick={() => handleFilterChange("active")}>Active</Button_asyncRed>
      <Button_asyncRed selected={filter === statusFilters_reduxToolkit.complety} onClick={() => handleFilterChange(statusFilters_reduxToolkit.complety)}>Completed</Button_asyncRed>
    </div>
  );
};