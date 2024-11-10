// main.jsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Thumb from './thumb'; 
import Main from './App'; 
// import Main from './App'; 

// Create routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />, 
      },

  {
    path: "/thumb",
    element: <Thumb />, 
  },
//   {
//     path: "/list",
//     element: <Main />, 
//   },
]);

// Render the main app with RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
