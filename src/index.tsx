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
import ScrollToTop from "./helpers/ScrollToTop";
import SignIn from "./routes/Auth/SignIn";
import { Sign } from "crypto";

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
    ],
  },
]);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
