import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/pages/ErrorPage";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import { homeLoader } from "./loaders/homeLoader";
import { loginAction, signupAction } from "./actions/signActions";
import Signup from "../components/pages/Signup";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: homeLoader,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
    action: loginAction,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage />,
    action: signupAction,
  },
]);
