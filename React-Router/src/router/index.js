import { createBrowserRouter } from "react-router-dom";
import About from "../pages/about";
import Home from "../pages/home";
import Profile from "../pages/profile";
import ErrorPage from "../pages/error-page";


const router = createBrowserRouter([
  { path: "/",  
    element: <Home/>, 
    errorElement: <ErrorPage/>
},
  { path: "/about", 
    element: <About/>,
    errorElement: <ErrorPage/>
},
  { path: "/profile/:id", 
    element: <Profile/>, 
    errorElement: <ErrorPage/>
},
])

export default router;