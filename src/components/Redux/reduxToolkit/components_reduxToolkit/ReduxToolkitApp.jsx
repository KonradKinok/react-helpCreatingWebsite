import { Layout_reduxToolkit } from "./Layout_reduxToolkit/Layout_reduxToolkit";
import { AppBar_reduxToolkit } from "./AppBar_reduxToolkit/AppBar_reduxToolkit";

import { TaskForm_reduxToolkit } from "./TaskForm_reduxToolkit/TaskForm_reduxToolkit";
import { TaskList_reduxToolkit } from "./TaskList_reduxToolkit/TaskList_reduxToolkit";

export const ReduxToolkitApp = () => {
  return (
    <Layout_reduxToolkit>
      <AppBar_reduxToolkit />
      <TaskForm_reduxToolkit />
      <TaskList_reduxToolkit />
    </Layout_reduxToolkit>
  );
};
