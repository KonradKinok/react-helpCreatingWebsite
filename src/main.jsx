import "./globalStyles/index.css"
import React from "react";
import ReactDOM from "react-dom/client";
import { AllPages } from "./pages/AllPages/AllPages";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AllPages />
    </BrowserRouter>
  </React.StrictMode>
);
