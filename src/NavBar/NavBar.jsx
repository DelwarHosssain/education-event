import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContacex } from "../Hook/AuthProvider";

const NavBar = () => {

    const {user, logOut}=useContext(AuthContacex)
    const hanglerSignOut =()=>{
        logOut()
        .then(()=>{
            console.log('logOut Done')
        })
        .catch(error=>{
            console.error(error);
        })
    }


    const navlink =<>
        <li ><NavLink to="/">Home</NavLink></li>
        {
          user && 
           <>
            <li><NavLink to="/Courses">Courses</NavLink></li>
            <li><NavLink to="/Techers">Teachers</NavLink></li>
            
            </>
        }
        <li><NavLink to="/Event">Event</NavLink></li>
        <li><NavLink to="/Contract">Contract</NavLink></li>
 
    </>

    const Navlink2 =<>
     {
      !user &&  <>
        <li><NavLink to="/Register">Register</NavLink></li>
        </>
     }
    </>
    return (
        <div className="fixed z-[9999] w-full h-[85px]  bg-white left-0 top-0">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu  space-x-10 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlink}
                    </ul>
                    </div>
                    <a className=" bg-[#ffb606] p-2 w-20 md:w-fit"><img src="https://i.ibb.co/rvTrRsC/logo-light.png" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navlink}
                    </ul>
                </div>
                <div className="navbar-end list-none ">
                    {
                    !user &&    <>
                        <button className=" ">{Navlink2}</button>
                        </>
                    }
                </div>
                <div className=" space-x-4">
                {
                    user ? <>
                    <span>{ user.email}</span>
                    <div className="avatar online" >
                        <div className="w-12 rounded-full ">
                        <img src={user.photoURL} className=" text-xs" alt="profile"/>
                        </div>
                    </div>                   
                    <button onClick={hanglerSignOut} className=" ml-10 px-1">logOut</button>
                    
                    </>
                    :<Link to="/Login">
                    <button className=" ml-10">Login</button>
                    </Link>
                }
                
                </div>
            </div>
        </div>
    );
};

export default NavBar;