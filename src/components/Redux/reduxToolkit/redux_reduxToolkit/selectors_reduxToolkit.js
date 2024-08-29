export const selectTasks = (state) => state.tasks;
export const selectStatusFilter = (state) => state.filters.status;
export const selectAsyncTasks = (state) => state.asyncTasks.items;
export const selectIsLoading = (state) => state.tasks.isLoading;
export const selectError = (state) => state.tasks.error;
