import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Courses from "../pages/courses/Courses";
import Techers from "../pages/Techers/Techers";
import Blog from "../pages/Blog/Blog";
import Contract from "../pages/Contract/Contract";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Courses',
                element: <Courses></Courses>
            },
            {
                path: '/Techers',
                element: <Techers></Techers>
            },
            {
                path: '/Blog',
                element: <Blog></Blog>
            },
            {
                path: '/Contract',
                element: <Contract></Contract>
            }
        
        ]
        
    }    
]);

export default router;