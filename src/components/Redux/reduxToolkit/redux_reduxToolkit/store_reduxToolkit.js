import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tasksReducer_reduxToolkit } from "./tasksSlice";
import { filtersReducer_reduxToolkit } from "./filtersSlice";
import { asyncTasksReducer } from "./asyncSlice";

const rootReducer = combineReducers({
  tasks: tasksReducer_reduxToolkit,
  filters: filtersReducer_reduxToolkit,
  asyncTasks: asyncTasksReducer,
});

export const store_reduxToolkit = configureStore({
  reducer: rootReducer,
});
