import { createSlice } from "@reduxjs/toolkit";
import { statusFilters_reduxToolkit } from "./constants_reduxToolkit";

const filtersInitialState = {
  status: statusFilters_reduxToolkit.all,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer_reduxToolkit = filtersSlice.reducer;
