import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import Union from "./routes/union";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "union/:unionId",
        element: <Union />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
