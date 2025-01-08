import { createBrowserRouter } from "react-router-dom";
import About from "../pages/about";
import Home from "../pages/home";
import Profile from "../pages/profile";
import ErrorPage from "../pages/error-page";
import Layout from "../components/layout";


const router = createBrowserRouter([
  { path: "/", 
  element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", index: true, element: <Home/> },
      { path: "about", element: <About/> },
      { path: "profile/:id", element: <Profile/> }
    ]
    }
])

export default router;