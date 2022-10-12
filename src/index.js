import React from "react";
import ReactDOM from "react-dom/client";
import AddShoe from "./components/Shoes/ShoesItem/AddShoe";
import "./index.css";
import App from "./App";
// import { RouterProvider } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add-shoe",
    element: <AddShoe />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
