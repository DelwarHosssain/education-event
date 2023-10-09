import image from '../../assets/11.jpg'
import { AiFillAccountBook } from "react-icons/ai";
import { FaBookOpen, FaGlobeAfrica} from "react-icons/fa";
import HomePart1 from './HomePart1/HomePart1';
import { useLoaderData } from 'react-router-dom';
import ComingEvent from './Coming-event/ComingEvent';

const Home = () => {
    const catagores =useLoaderData()
    
    return (
        
        <div className=''>
            <div className='mt-24  bg-no-repeat bg-fixed brightness-50  ' style=  
            
            {{backgroundImage: `url(${image})`}}  >
            
            <div className=' space-y-10 py-40   '>
                <h1 className=' text-6xl  text-center text-white  font-extrabold m-auto w-5/12  '>Growth You Career With  Complate Courses</h1>
                <div className=' space-x-10  text-white flex  justify-center gap-5'>
                <div className='flex mt-5 '>
                <AiFillAccountBook className=' text-lg mr-3 text-[#FFB606]' ></AiFillAccountBook><p>ARCHITECTURE</p> 
                </div>
                <div className='flex mt-5 '>
                <FaBookOpen className=' text-lg mr-3  text-[#FFB606]'></FaBookOpen> <p>EDUCATION</p>
                </div>
                <div className='flex mt-5'>
                <FaGlobeAfrica className=' text-lg mr-3 text-[#FFB606]'></FaGlobeAfrica><p> GEOGRAPHY</p>
                </div>
               </div>
            </div>
        </div>
            <HomePart1 catagores={catagores}></HomePart1>
            <div>
                <ComingEvent></ComingEvent>
            </div>
        </div>
    );
};

export default Home;