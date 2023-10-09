import '../../../Catragore/catragore.css'
const Catagore = ({catagore}) => {
    const{picture,color, title,category,cadite,Course} =catagore||{}

    
    return (
        <div>
            <div className=" w-96 border border-spacing-1 group  hover-1">
                <div className=" flex px-5 py-20 space-x-5 group-hover:stroke-white hit">
                <div>
                    <img  className=" w-20" src={picture} alt="" />
                </div>
                <div className="space-y-5">
                    <h1 className="text-lg  font-medium group-hover:text-white">{title}</h1>
                    <div className="flex space-x-4 text-base text-[#838c9f] group-hover:text-white">
                        <h2 >{category}</h2>
                        <div className="h-[20px] border-l-[2px] border-l-[#e9edf7] border-solid group-hover:text-white"></div>
                        <p>{cadite}</p>
                    </div>
                    <h2 className="group-hover:text-black  text-base bg-[#e9edf7] w-2/3 text-center">{Course}</h2>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default Catagore;