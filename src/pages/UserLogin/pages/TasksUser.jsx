import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { TaskListUser } from "../components/TaskListUser/TaskListUser";
import { TaskEditorUser } from "../components/TaskEditorUser/TaskEditorUser";
import { fetchTasks } from "../components/reduxUser/tasksUser/operationsUser.tasks";
import { selectLoading } from "../components/reduxUser/tasksUser/selectorsUser.tasks";

export default function TasksUser() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <TaskEditorUser />
      <div>{isLoading && "Request in progress..."}</div>
      <TaskListUser />
    </>
  );
}
