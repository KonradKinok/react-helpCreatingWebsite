import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../reduxToolkit/redux_reduxToolkit/operations";
import { getError, getIsLoading } from "../reduxToolkit/redux_reduxToolkit/selectors_reduxToolkit";
import { Layout_asyncRed } from "./Layout_asyncRed/Layout_asyncRed";
import { Main_asyncRed } from "./Main_asyncRed/Main_asyncRed";
import { TaskForm_asyncRed } from "./TaskForm_asyncRed/TaskForm_asyncRed";
import { TaskList_asyncRed } from "./TaskList_asyncRed/TaskList_asyncRed";
export const AsynchronicReduxApp = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <Layout_asyncRed>
            <TaskForm_asyncRed />
            {isLoading && !error && <b>Request in progress...</b>}
            <TaskList_asyncRed />
            {/* <Main_asyncRed /> */}
        </Layout_asyncRed>
    );
};
