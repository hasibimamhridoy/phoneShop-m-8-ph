import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myCreatedRoute from "./router/Router";
import GlobalStateProvider from "./provider/GlobalStateProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <RouterProvider router={myCreatedRoute}></RouterProvider>
    </GlobalStateProvider>
  </React.StrictMode>
);
