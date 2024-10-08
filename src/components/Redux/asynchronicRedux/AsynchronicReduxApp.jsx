import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../reduxToolkit/redux_reduxToolkit/operations";
import { selectError, selectIsLoading } from "../reduxToolkit/redux_reduxToolkit/selectors_reduxToolkit";
import { Layout_asyncRed } from "./Layout_asyncRed/Layout_asyncRed";
import { Main_asyncRed } from "./Main_asyncRed/Main_asyncRed";
import { TaskForm_asyncRed } from "./TaskForm_asyncRed/TaskForm_asyncRed";
import { TaskList_asyncRed } from "./TaskList_asyncRed/TaskList_asyncRed";
import { AppBar_asyncRed } from "./AppBar_asyncRed/AppBar_asyncRed";

export const AsynchronicReduxApp = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <Layout_asyncRed>
            <AppBar_asyncRed />
            <TaskForm_asyncRed />
            {isLoading && !error && <b>Request in progress...</b>}
            <TaskList_asyncRed />
            {/* <Main_asyncRed /> */}
        </Layout_asyncRed>
    );
};
