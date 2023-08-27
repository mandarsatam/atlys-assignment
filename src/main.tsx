import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import FeedPage from "./pages/FeedPage/FeedPage";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/feed",
    element: <FeedPage/>,
    children: [
      {
        path: "/feed/register",
        element: <RegisterPage/>,
      },
      {
        path: "/feed/login",
        element: <LoginPage/>,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);