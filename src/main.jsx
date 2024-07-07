import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/index.jsx";
import SignIn from "./pages/log-in/index.jsx";
import NotFound from "./pages/notfound/index.jsx";
import SignUp from "./pages/sign-up/index.jsx";
import Menu from "./pages/menu/index.jsx";
import { AuthProvider } from "./setup/auth/Auth.jsx";
import Logout from "./pages/log-out/index.jsx";
// import { useAuth } from "./setup/auth/Auth.jsx";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },

  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
