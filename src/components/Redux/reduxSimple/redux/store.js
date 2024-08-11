import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";
// Początkowa wartość statusu Redux dla Reducera root,
// jeżeli nie przekaże się parametru preloadedState.
// const initialState = {
//   tasks: [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//     { id: 5, text: "Ucz się HTML oraz CSS", completed: true },
//   ],
//   filters: {
//     status: "all",
//   },
// };

// // Tymczasem wykorzystujemy reducer, który
// // zwraca tylko otrzymany status
// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// Tworzymy rozszerzenie store, aby dodać narzędzia programisty
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer);
