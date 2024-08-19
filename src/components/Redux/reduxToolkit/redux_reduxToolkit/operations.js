import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// export const fetchTasks = () => async (dispatch) => {
//   try {
//     // Wskaźnik ładowania
//     dispatch(fetchingInProgress());
//     // HTTP-request
//     const response = await axios.get("/tasks");
//     console.log("operations -> response: ", response);
//     // Opracowywanie danych
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     // Opracowywanie błędu
//     dispatch(fetchingError(e.message));
//   }
// };
export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  // Wykorzystamy symbol podkreślenia jako nazwę pierwszego parametru,
  // ponieważ w tej operacji nie jest nam potrzebny
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      // Przy pomyślnym zapytaniu zwracamy promise z danymi
      return response.data;
    } catch (e) {
      // Przy błędzie zapytania zwracamy promise,
      // który zostanie odrzucony z tekstem błędu
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/tasks", { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (task, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
