import { statusFilters } from "./constants";
import { combineReducers } from "redux";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
  { id: 5, text: "Ucz się HTML oraz CSS", completed: true },
];

// // Wykorzystujemy initialState jako domyślną wartość statusu
// export const rootReducer = (state = initialState, action) => {
//   // Reducer realizuje akcje po wartości właściwości type
//   switch (action.type) {
//     // W zależności od rodzaju akcji będzie się wykonywała inna logika
//     case "tasks/addTask":
//       // Należy zwrócić nowy obiekt statusu
//       return {
//         // w którym są wszystkie dane istniejącego statusu
//         ...state,
//         // i nowa tablica zadań
//         tasks: [
//           // w której są wszystkie istniejące zadania
//           ...state.tasks,
//           // i obiekt nowego zadania
//           action.payload,
//         ],
//       };
//     case "tasks/deleteTask":
//       return {
//         ...state,
//         tasks: state.tasks.filter((task) => task.id !== action.payload),
//       };
//     case "tasks/toggleCompleted":
//       return {
//         ...state,
//         tasks: state.tasks.map((task) => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return { ...task, completed: !task.completed };
//         }),
//       };
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload,
//         },
//       };
//     default:
//       // Każdy reducer otrzymuje wszystkie akcje wysłane do store.
//       // Jeśli reducer nie powinien opracowywać jakiegoś typu akcji,
//       // należy zwrócić istniejący status bez zmian.
//       return state;
//   }
// };

// Odpowiada za aktualizację właściwości tasks
// Teraz wartością parametru state będzie tablica zadań
const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case "tasks/addTask":
      return [...state, action.payload];
    case "tasks/deleteTask":
      return state.filter((task) => task.id !== action.payload);
    case "tasks/toggleCompleted":
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    default:
      return state;
  }
};

const filtersInitialState = {
  status: statusFilters.all,
};

// Odpowiada jedynie za aktualizację właściwości filters
// Teraz wartością parametru state będzie obiekt filtrów
const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
