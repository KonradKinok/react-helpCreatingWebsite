import { createSelector } from "@reduxjs/toolkit";
import { statusFilters_reduxToolkit } from "./constants_reduxToolkit";
export const selectTasks = (state) => state.tasks;
export const selectStatusFilter = (state) => state.filters.status;
export const selectAsyncTasks = (state) => state.asyncTasks.items;
export const selectIsLoading = (state) => state.tasks.isLoading;
export const selectError = (state) => state.tasks.error;

// export const selectVisibleTasks = (state) => {
//   // Wykorzystujemy inne selektory
//   const tasks = selectAsyncTasks(state);
//   const statusFilter = selectStatusFilter(state);
//   console.log("selectors_reduxToolkit -> selectVisibleTasks -> tasks", tasks);
//   console.log(
//     "selectors_reduxToolkit -> selectVisibleTasks -> statusFilter",
//     statusFilter,
//   );
//   switch (statusFilter) {
//     case statusFilters_reduxToolkit.active:
//       return tasks.filter((task) => !task.completed);
//     case statusFilters_reduxToolkit.complety:
//       return tasks.filter((task) => task.completed);
//     default:
//       return tasks;
//   }
// };
export const selectVisibleTasks = createSelector(
  [selectAsyncTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    console.log("Calculating visible tasks. Now memoized!");

    switch (statusFilter) {
      case statusFilters_reduxToolkit.active:
        return tasks.filter((task) => !task.completed);
      case statusFilters_reduxToolkit.complety:
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  },
);
// export const selectTaskCount = (state) => {
//   const tasks = selectAsyncTasks(state);

//   return tasks.reduce(
//     (count, task) => {
//       if (task.completed) {
//         count.completed += 1;
//       } else {
//         count.active += 1;
//       }
//       return count;
//     },
//     { active: 0, completed: 0 },
//   );
// };

export const selectTaskCount = createSelector([selectAsyncTasks], (tasks) => {
  console.log("Calculating task count. Now memoized!");

  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 },
  );
});
