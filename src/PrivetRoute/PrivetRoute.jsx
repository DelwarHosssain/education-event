import { useContext } from "react";
import { AuthContacex } from "../Hook/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'; 

const PrivetRoute = ({children}) => {

    const {user, Loading}=useContext(AuthContacex)
    if (Loading){
        return <div className="flex items-center justify-center h-screen ">
                    <span className="loading loading-bars loading-lg"></span>
                </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/Login"></Navigate>;
};

export default PrivetRoute;

PrivetRoute.propTypes ={
    
    children: PropTypes.node,
}