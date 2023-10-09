import Catagore from "../Catagore/Catagore";

const HomePart1 = ({catagores}) => {
    console.log(catagores)

    

    return (
        <div>
            <div className=" text-center mt-20 space-y-5">
            <h1 className=" text-3xl font-bold">Top Categories</h1>
            <div  className=" w-56  m-auto border  border-[#FFB606]"></div>
            <p className=" text-base  font-medium">Discourse assurance estimable applauded to so. Him everything melancholy uncommonly but solicitude inhabiting <br /> projection off. Connection stimulated estimating excellence an to impression.z</p>
            </div>
            <div className="grid grid-cols-3 max-w-6xl mx-auto mt-10">
                {
                    catagores?.map(catagore=><Catagore key={catagore.id} catagore={catagore}></Catagore>)
                }
            </div>
        </div>
    );
};

export default HomePart1;