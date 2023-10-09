import { useLoaderData } from "react-router-dom";
import Course from "./Courses/Course";

const Courses = () => {
    const courses =useLoaderData()
    console.log(courses)
    return (
        <div className="mt-44"> 
            <h1 className=" text-3xl font-bold  text-center">Our COURSES</h1>
            <div className="mt-24 grid grid-cols-1 md:grid md:grid-cols-3 gap-5 container mx-auto">
            {
                courses?.map(course=><Course key={course.id} course={course}></Course>)
            }
        </div>
        </div>
    );
};

export default Courses;