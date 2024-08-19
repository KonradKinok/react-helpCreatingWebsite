import { createSlice, nanoid } from "@reduxjs/toolkit";
import {
  fetchTasks,
  addTask,
  deleteTask,
  toggleCompleted,
} from "../redux_reduxToolkit/operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const isPendingAction = (action) => {
  return action.type.endsWith("/pending");
};

const isRejectAction = (action) => {
  return action.type.endsWith("/rejected");
};

const asyncTaskSlice = createSlice({
  name: "asyncTask",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  //   reducers: {
  //     fetchingInProgress(state) {
  //       state.isLoading = true;
  //     },
  //     fetchingSuccess(state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items = action.payload;
  //     },
  //     fetchingError(state, action) {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     },
  //     },
  extraReducers: (builder) => {
    builder
      //   .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      //   .addCase(fetchTasks.rejected, handleRejected)
      //   .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      //   .addCase(addTask.rejected, handleRejected)
      //   .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id,
        );
        state.items.splice(index, 1);
      })
      //   .addCase(deleteTask.rejected, handleRejected)
      //   .addCase(toggleCompleted.pending, handlePending)
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id,
        );
        state.items[index].completed = !state.items[index].completed;
      })
      //   .addCase(toggleCompleted.rejected, handleRejected);
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state, action) => {
        state.error = "someone use old function, fix it!";
      });
  },
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =  asyncTaskSlice.actions;
export const asyncTasksReducer = asyncTaskSlice.reducer;
