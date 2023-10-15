import image from '../../assets/11.jpg'
import { AiFillAccountBook } from "react-icons/ai";
import { FaBookOpen, FaGlobeAfrica} from "react-icons/fa";
import HomePart1 from './HomePart1/HomePart1';
import { useLoaderData } from 'react-router-dom';
import ComingEvent from './Coming-event/ComingEvent';
import Contracts from './HomePart1/Contract/Contracts';




const Home = () => {
    const catagores =useLoaderData()

    

    
    return (
        
        <div className=''>
            <div className='   mt-0 md:mt-24    bg-no-repeat bg-cover  brightness-50 bg-fixed  md:bg-fixed  ' style=  
            
            {{backgroundImage: `url(${image})`}}  >
            
            <div className=' space-y-10 py-40  mb-48 '>
                <h1 className='text-sm font-base  md:text-6xl  text-center text-white  md:font-extrabold m-auto  w-5/12  '>Growth You Career With  Complate Courses</h1>
                <div className=' space-x-3 md:space-x-10  text-white flex  justify-center gap-1'>
                <div className='flex mt-5 '>
                <AiFillAccountBook className='text-sm md:text-lg mr-3 text-[#FFB606]' ></AiFillAccountBook><p>ARCHITECTURE</p> 
                </div>
                <div className='flex mt-5 '>
                <FaBookOpen className='text-sm md:text-lg mr-3  text-[#FFB606]'></FaBookOpen> <p>EDUCATION</p>
                </div>
                <div className='flex mt-5'>
                <FaGlobeAfrica className='text-sm md:text-lg mr-3 text-[#FFB606]'></FaGlobeAfrica><p> GEOGRAPHY</p>
                </div>
               </div>
            </div>
        </div>
            <div className=' ml-7'><HomePart1 catagores={catagores}></HomePart1></div>
            <div className='container mx-auto ml-2'>
                <ComingEvent></ComingEvent>
            </div>
            <div className='bg-[#002147] py-10 mt-10'>
                <Contracts></Contracts>
            </div>
        </div>
    );
};

export default Home;