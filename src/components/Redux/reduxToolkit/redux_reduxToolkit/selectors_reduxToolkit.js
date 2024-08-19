export const getTasks = (state) => state.tasks;
export const getStatusFilter = (state) => state.filters.status;
export const getAsyncTasks = (state) => state.asyncTasks.items;
export const getIsLoading = (state) => state.tasks.isLoading;
export const getError = (state) => state.tasks.error;
