import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
const CuorseVisit = () => {
    
    
    const [courseVsites, setCourse]=useState({});
    const {id} =useParams()
    console.log(id)
    

    const couseVisit = useLoaderData();
    console.log(couseVisit)

    useEffect(()=>{
    const courseFind =couseVisit?.find(course=>course.id==id)
        setCourse(courseFind)
    },[id,couseVisit])

    console.log(courseVsites)

    return (
        <div className="mt-52">
            <div className="card mb-60  lg:card-side bg-base-100 shadow-xl container mx-auto">
                <figure><img  data-aos="fade-up-right" className=" flex-1  " src={courseVsites.course_image} alt="Album"/></figure>
                <div className=" flex-1  card-body space-y-10">
                    <h2 data-aos="flip-left" className="card-title text-5xl">{courseVsites.course_name}</h2>
                    <div className="flex justify-start text-2xl">
                        <p>Price:{courseVsites.price}</p>
                        <p>Credits:{courseVsites.credits}</p>
                    </div>
                    <h1>{courseVsites.details}</h1>
                    <div className="card-actions justify-end">
                <Link to={"/Courses"}>
                <button className="mt-28">Go To Course</button>
                
                </Link>
            </div>
        </div>
    </div>
        </div>
    );
};

export default CuorseVisit;