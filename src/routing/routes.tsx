import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import ContactUs from "../components/ContactUs";
import About from "../components/About";
import Layout from "../components/Layout";
import PrivateRoutes from "../components/PrivateRoutes";
import Course from "../components/Course";
import SignInCard from "../components/SignIn";
import SignUpCard from "../components/SignUp";

const router = createBrowserRouter([
  // Root Route
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "sign-in", element: <SignInCard /> },
      { path: "sign-up", element: <SignUpCard /> },
    ],
  },

  //   Private Routes
  {
    element: <PrivateRoutes />,
    children: [{ path: "courses", element: <Course /> }],
  },
]);

export default router;
