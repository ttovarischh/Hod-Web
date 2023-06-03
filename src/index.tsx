import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { ThemeProvider } from "styled-components";
import theme from "./themes/mainTheme";
import useAuth, { AuthProvider } from "./authContext/useAuth";
// pages_here
import Profile from "./routes/Account/Profile";
import SignUp from "./routes/Auth/SignUp";
import PrivacyPolicy from "./routes/Commercial/PrivacyPolicy";
import About from "./routes/Commercial/About";
import Home from "./routes/Home";
import ErrorPage from "./routes/Error";
import SignIn from "./routes/Auth/SignIn";
import Settings from "./routes/Account/Settings";
import Create from "./routes/GamePath/Create";
import axios from "axios";
import SingleGame from "./routes/GamePath/SingleGame";
import { ActionCableProvider } from "react-actioncable-provider";
import { API_WS_ROOT } from "./constants";
import FullInitiative from "./routes/GamePath/FullInitiative";
import "./i18n/IMLocalize";

// axios.defaults.withCredentials = true;
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4NGViMjIwMS1iZDcyLTQ0MGUtODI3ZC1kODc3NmVkMWQyNDQiLCJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjgwMzE5MTIzLCJleHAiOjE2ODAzMjI3MjN9.P70bOVzUZpFVxTuOqOao1DTQo-67DWqcD69wg09skp8";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <SignIn />,
      },
      {
        path: "account",
        element: <Profile />,
      },
      {
        path: "registration",
        element: <SignUp />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "game/:code",
        element: <SingleGame />,
      },
      {
        path: "game/:code/initiative",
        element: <FullInitiative />,
      },
    ],
  },
]);

const App = () => {
  const { user, loading, error, login, signUp, logout } = useAuth();
  console.log("user from context" + JSON.stringify(user));

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

root.render(
  // <React.StrictMode>
  <ActionCableProvider url={API_WS_ROOT}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ActionCableProvider>
  // </React.StrictMode>
);
