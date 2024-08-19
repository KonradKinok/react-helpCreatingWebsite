import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../reduxToolkit/redux_reduxToolkit/operations";
import { getAsyncTasks } from "../../reduxToolkit/redux_reduxToolkit/selectors_reduxToolkit";
import { TaskList_asyncRed } from "../TaskList_asyncRed/TaskList_asyncRed";
import { getError, getIsLoading } from "../../reduxToolkit/redux_reduxToolkit/selectors_reduxToolkit";
export const Main_asyncRed = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    // Otrzymujemy części stanu
    // const { items, isLoading, error } = useSelector(getAsyncTasks);

    // Wywołujemy operację
    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);
    // Renderujemy układ w zależności od wartości w stanie
    return (
        <div>
            {isLoading && !error && <b>Request in progress...</b>}
            {/* <p>Liczba wyników: {items.length} </p>
            <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}

        </div>
    );
};