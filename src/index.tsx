import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./routes/Error";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import About from "./routes/About";
import Home from "./routes/Home";
import { ThemeProvider } from "styled-components";
import theme from "./themes/mainTheme";
import SignIn from "./routes/Auth/SignIn";
import { AuthContext } from "./authContext/AuthContext";
import useAuth, { AuthProvider } from "./authContext/useAuth";
import Profile from "./routes/Profile";

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
