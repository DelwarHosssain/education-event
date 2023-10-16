import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "./footer/footer";


const Root = () => {
    return (
        <div>
            <div className="relative">
           
           <NavBar></NavBar>
           
            <div>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>  
        </div>
        </div>
    );
};

export default Root;