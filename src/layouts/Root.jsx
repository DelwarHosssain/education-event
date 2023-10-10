import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "./footer/footer";


const Root = () => {
    return (
        <div>
            <div className="relative">
           
           <NavBar></NavBar>
           
            <Outlet></Outlet>
            <Footer></Footer>  
        </div>
        </div>
    );
};

export default Root;