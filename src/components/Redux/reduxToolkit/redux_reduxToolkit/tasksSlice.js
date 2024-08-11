import { createSlice, nanoid } from "@reduxjs/toolkit";
const dane = "2024-12-23T20:23:45Z";
const tasksInitialState = [
  {
    id: 0,
    text: "Learn HTML and CSS",
    date: new Date().toISOString(),
    complet: true,
    cos: true,
  },
  {
    id: 1,
    text: "Get good at JavaScript",
    date: new Date().toISOString(),
    complet: true,
    cos: true,
  },
  {
    id: 2,
    text: "Master React",
    date: new Date().toISOString(),
    complet: false,
    cos: true,
  },
  {
    id: 3,
    text: "Discover Redux",
    date: new Date().toISOString(),
    complet: false,
    cos: true,
  },
  {
    id: 4,
    text: "Build amazing apps",
    date: new Date().toISOString(),
    complet: true,
    cos: true,
  },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            date: dane,
            complet: false,
            cos: true,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.complet = !task.complet;
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer_reduxToolkit = tasksSlice.reducer;
