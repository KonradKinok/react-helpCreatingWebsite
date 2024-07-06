import "./globalStyles/index.css"
import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/Footer";
import { Kary } from "./components/Kary/Kary";
import { ReactHooks } from "./components/ReactHooks/ReactHooks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Kary />
    <ReactHooks />
    <Footer />
  </React.StrictMode>
);
