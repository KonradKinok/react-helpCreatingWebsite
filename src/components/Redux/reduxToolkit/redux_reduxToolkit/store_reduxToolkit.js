import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer_reduxToolkit } from "./tasksSlice";
import { filtersReducer_reduxToolkit } from "./filtersSlice";
export const store_reduxToolkit = configureStore({
  reducer: {
    tasks: tasksReducer_reduxToolkit,
    filters: filtersReducer_reduxToolkit,
  },
});
