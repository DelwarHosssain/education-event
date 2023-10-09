import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Courses from "../pages/courses/Courses";
import Techers from "../pages/Techers/Techers";
import Contract from "../pages/Contract/Contract";
import Event from "../pages/Blog/Event";

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
                path: '/Event',
                element:<Event></Event>
            },
            {
                path: '/Contract',
                element: <Contract></Contract>
            }
        
        ]
        
    }    
]);

export default router;