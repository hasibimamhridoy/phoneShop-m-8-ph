import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Phone from "../pages/Phone/Phone";
import Favorites from "../pages/Favorites/Favorites";
import Login from "../pages/Login/Login";

const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children : [
        {
            path : "/",
            element:<Home></Home>,
            loader : ()=>fetch(`/phones.json`),

        },
        {
            path : "/favorites",
            element:<Favorites></Favorites>
        },
        {
            path : "/login",
            element:<Login></Login>
        },
        {
            path : "/phones/:id",
            element:<Phone></Phone>
        },
      ]
    }
  ]) 

export default myCreatedRoute;