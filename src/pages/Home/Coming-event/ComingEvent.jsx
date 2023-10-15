import '../../../ComingEvent/ComingEvent.css'
import {AiOutlineClockCircle } from 'react-icons/ai';
import {FaMapLocation  } from 'react-icons/fa6';
const ComingEvent = () => {
    
    return (
        <div>
            <div className=" text-center mt-20 space-y-5">
            <h1 className=" text-3xl font-bold">Upcoming Events</h1>
            <div  className=" w-56  m-auto border  border-[#FFB606]"></div>
            <p className=" text-base  font-medium">Discourse assurance estimable applauded to so. Him everything melancholy uncommonly but solicitude inhabiting <br /> projection off. Connection stimulated estimating excellence an to impression.z</p>
            </div>
            <div className="mt-0 md:mt-20 ">
                <div className="grid grid-cols-1 md:grid-cols-2 bg-base-100   shadow-xl  gap-4">
                    <figure><img className="h-96" src="https://i.ibb.co/rs0bTkP/1.jpg" alt="Movie"/></figure>
                    <div className="flex   mt-10 space-x-11   ">
                    
                    <div>
                        <h1 className=" pl-3 text-5xl md:text-7xl text-[#FFB606] font-extrabold">16</h1>
                        <p className="ml-3 pl-3  text-[#807c7c]">APR, 2023</p>
                    </div>
                    <div className="h-[100px] border-l-[2px] border-l-[#e9edf7] border-solid "></div>
                    <div className=" space-y-5">
                        <h1 className=" md:text-xl font-extrabold">Social Science & Humanities</h1>
                        <div className=" flex space-x-4">
                            <AiOutlineClockCircle  className=' text-[#FFB606]'></AiOutlineClockCircle><p>8:00 - 16:00</p>
                            <div className="h-[20px] border-l-[2px] border-l-[#e9edf7] border-solid "></div>
                            <FaMapLocation  className=' text-[#FFB606]'></FaMapLocation ><p> California, TX 70240</p>
                        </div>
                        <p className="text-justify text-xs pr-10">Attachment astonished to on appearance imprudence <br /> so collecting in excellence.Tiled way blind lived whose new. <br /> The for fully had she there leave merit enjoy forth.</p>
                        <button className='mb-10'>Book Now</button>
                    </div>
                     
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 bg-base-100  shadow-xl  gap-4">
                    <figure><img className="h-96" src="https://i.ibb.co/JtcDxgK/2.jpg" alt="Movie"/></figure>
                    <div className="flex   mt-10 space-x-11   ">
                    
                    <div>
                        <h1 className=" pl-3  text-7xl text-[#FFB606] font-extrabold">8</h1>
                        <p className="ml-3  pl-3  text-[#807c7c]">JUL, 2024</p>
                    </div>
                    <div className="h-[100px] border-l-[2px] border-l-[#e9edf7] border-solid "></div>
                    <div className=" space-y-5">
                        <h1 className=" text-xl font-extrabold">Secondary Schools United Nations</h1>
                        <div className=" flex space-x-4">
                            <AiOutlineClockCircle  className=' text-[#FFB606]'></AiOutlineClockCircle><p>10:00 - 14:00</p>
                            <div className="h-[20px] border-l-[2px] border-l-[#e9edf7] border-solid "></div>
                            <FaMapLocation  className=' text-[#FFB606]'></FaMapLocation ><p> California, TX 70240</p>
                        </div>
                        <p className="text-justify pr-10">Attachment astonished to on appearance imprudence <br /> so collecting in excellence.Tiled way blind lived whose new. <br /> The for fully had she there leave merit enjoy forth.</p>
                        <button className=''>Book Now</button>
                    </div>
                     
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 bg-base-100  shadow-xl  gap-4">
                    <figure><img className="h-96" src="https://i.ibb.co/HdF8NDp/3.jpg" alt="Movie"/></figure>
                    <div className="flex   mt-10 space-x-11   ">
                    
                    <div>
                        <h1 className="pl-3  text-7xl text-[#FFB606] font-extrabold">16</h1>
                        <p className="ml-3  pl-3  text-[#807c7c]">AUG, 2024</p>
                    </div>
                    <div className="h-[100px] border-l-[2px] border-l-[#e9edf7] border-solid "></div>
                    <div className=" space-y-5">
                        <h1 className=" text-xl font-extrabold">International Conference on Art </h1>
                        <div className=" flex space-x-4">
                            <AiOutlineClockCircle  className=' text-[#FFB606]'></AiOutlineClockCircle><p>11:00 - 19:00</p>
                            <div className="h-[20px] border-l-[2px] border-l-[#e9edf7] border-solid "></div>
                            <FaMapLocation  className=' text-[#FFB606]'></FaMapLocation ><p> California, TX 70240</p>
                        </div>
                        <p className="text-justify pr-10">Attachment astonished to on appearance imprudence <br /> so collecting in excellence.Tiled way blind lived whose new. <br /> The for fully had she there leave merit enjoy forth.</p>
                        <button className=''>Book Now</button>
                    </div>
                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingEvent;