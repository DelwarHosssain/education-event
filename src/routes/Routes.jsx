import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Courses from "../pages/courses/Courses";
import Techers from "../pages/Techers/Techers";
import Event from "../pages/Blog/Event";
import Register from "../layouts/Register/Register";
import Login from "../layouts/Login/Login";
import Contract from "../pages/Contract/Contract";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import CuorseVisit from "../pages/Contract/CuorseVisit";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement :<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('/Json/Catagore.json')
            },
            {
                path: '/Courses',
                element: <PrivetRoute><Courses></Courses></PrivetRoute>,
                loader:()=>fetch('/Json/course.json')
            },
            {
                path: '/Techers',
                element: <PrivetRoute><Techers></Techers></PrivetRoute>,
                loader:()=>fetch('/Json/Teacher.json')
            },
            {
                path: '/Contract',
                element:<Contract></Contract>
            },
            {
                path: '/Event',
                element:<Event></Event>
            },
            {
                path: '/Login',
                element: <Login></Login>
            },
            {
                path: '/Register',
                element: <Register></Register>
            },
            
            {
                path:'/Courses/:id',
                element:<CuorseVisit></CuorseVisit>,
                loader:()=>fetch('/Json/course.json')
            }
        ]
        
    }    
]);

export default router;