import "./globalStyles/index.css"
import React from "react";
import ReactDOM from "react-dom/client";
import { AllPages } from "./pages/AllPages/AllPages";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { store } from "./components/Redux/reduxSimple/redux/store";
import { store_reduxToolkit } from "./components/Redux/reduxToolkit/redux_reduxToolkit/store_reduxToolkit";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store_reduxToolkit} >
        <AllPages />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
