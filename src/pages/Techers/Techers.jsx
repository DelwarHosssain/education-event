import { useLoaderData } from "react-router-dom";
import Teacher from "./Teacher/Teacher";


const Techers = () => {
    const Teachers =useLoaderData()
    
    return (
        <div>
        <h1 className="mt-40  ml-[30%] text-5xl font-bold">ADVISOR CAROUSEL</h1>
        <div className=" grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 ml-8 xl:grid-cols-3 md:ml-6 lg:ml-44 xl:ml-32  2xl:ml-96">
            
            {
                Teachers?.map(teacher=><Teacher key={teacher.id} teacher={teacher} ></Teacher>)
            }
        </div>
    </div>
    );
};

export default Techers;