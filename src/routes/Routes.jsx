import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Courses from "../pages/courses/Courses";
import Techers from "../pages/Techers/Techers";
import Event from "../pages/Blog/Event";
import Register from "../layouts/Register/Register";
import Login from "../layouts/Login/Login";
import Contract from "../pages/Contract/Contract";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('public/Json/Catagore.json')
            },
            {
                path: '/Courses',
                element: <Courses></Courses>,
                loader:()=>fetch('/public/Json/course.json')
            },
            {
                path: '/Techers',
                element: <Techers></Techers>,
                loader:()=>fetch('public/Json/Teacher.json')
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
            
        
        ]
        
    }    
]);

export default router;