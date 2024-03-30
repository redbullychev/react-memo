import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { EasyModeProvider } from "./context/easyMode";
import { LeadersProvider } from "./context/Leaders";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LeadersProvider>
      <EasyModeProvider>
        <RouterProvider router={router}></RouterProvider>
      </EasyModeProvider>
    </LeadersProvider>
  </React.StrictMode>,
);
