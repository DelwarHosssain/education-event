import { useContext } from "react";
import ComingEvent from "../Home/Coming-event/ComingEvent";
import { AuthContacex } from "../../Hook/AuthProvider";


const Event= () => {
    const {Loading}=useContext(AuthContacex)
    
    return (
        <div className="mb-10">
            <ComingEvent></ComingEvent>
        </div>
    );
};

export default Event;