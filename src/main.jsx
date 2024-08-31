import "./globalStyles/index.css"
import React from "react";
import ReactDOM from "react-dom/client";
import { AllPages } from "./pages/AllPages/AllPages";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./pages/UserLogin/components/reduxUser/storeUser";
import { store_reduxToolkit } from "./components/Redux/reduxToolkit/redux_reduxToolkit/store_reduxToolkit";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store_reduxToolkit} >
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <BrowserRouter basename="/react-helpCreatingWebsite">
            <AllPages />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </Provider>
  </React.StrictMode >
);
