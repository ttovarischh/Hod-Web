import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { ThemeProvider } from "styled-components";
import theme from "./themes/mainTheme";
import useAuth, { AuthProvider } from "./authContext/useAuth";
import "./i18n/IMLocalize";
// pages_here
import Profile from "./routes/Account/Profile";
import SignUp from "./routes/Auth/SignUp";
import PrivacyPolicy from "./routes/Commercial/PrivacyPolicy";
import About from "./routes/Commercial/About";
import Home from "./routes/MainFlow/Home";
import ErrorPage from "./routes/MainFlow/Error";
import SignIn from "./routes/Auth/SignIn";
import Settings from "./routes/Account/Settings";
import Create from "./routes/GamePath/Create";
import SingleGame from "./routes/GamePath/SingleGame";
import FullInitiative from "./routes/GamePath/FullInitiative";

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
  const { user } = useAuth();
  console.log("user from context" + JSON.stringify(user));

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
