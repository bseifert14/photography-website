import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Color from './routes/Color';
import ErrorPage from "./error-page";
import Home from './routes/Home';
import Contact from "./routes/contact";
import Negative from "./routes/negative";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "color",
        element: <Color />,
      },
      {
        path: "negative",
        element: <Negative />,
      },
      {
        path: "about",
        element: <Contact />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);