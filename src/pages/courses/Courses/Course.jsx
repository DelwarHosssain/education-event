

const Course = ({course}) => {
    const{course_image,course_name,price,teacher_image}=course||{}
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={course_image}alt="img" /></figure>
                <div className="card-body">
                <div>
                <div className="avatar relative  bottom-28">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={teacher_image} />
                    </div>
                    </div>
                </div>
                <div className="relative bottom-8 space-y-4">
                <div >
                    <h1 className=" text-xl font-bold">{course_name}</h1>
                </div>
                <div className=" border"></div>
                <div className="flex justify-between items-center">
                    <button>See Details</button>
                    <h2>{price} $</h2>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Course;