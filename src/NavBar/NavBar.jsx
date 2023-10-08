import { NavLink } from "react-router-dom";

const NavBar = () => {
    const navlink =<>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Courses">Courses</NavLink></li>
        <li><NavLink to="/Techers">Teachers</NavLink></li>
        <li><NavLink to="/Blog">Blog</NavLink></li>
        <li><NavLink to="/Contract">Contract</NavLink></li>
    
    </>
    return (
        <div className="fixed z-[9999] w-full h-[85px]  bg-white left-0 top-0">
            <div className="navbar bg-base-100   max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlink}
                    </ul>
                    </div>
                    <a className=" bg-[#ffb606] p-2"><img src="https://i.ibb.co/rvTrRsC/logo-light.png" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;