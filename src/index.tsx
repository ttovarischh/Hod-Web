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
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
