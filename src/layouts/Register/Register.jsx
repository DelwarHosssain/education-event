import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContacex } from "../../Hook/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {



    const { createUser } = useContext(AuthContacex)
    const navigate =useNavigate();
    const hendleRegistation  =e =>{
        e.preventDefault();
        const name =e.target.name.value;
        const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then(Result=>{
            console.log(Result.user)
            e.target.reset();
            Swal.fire(
                'Registation Success',
                'You clicked the button!',
                'success'
              )
            navigate('/login')

        })
        
        .catch(error=>{
            console.error(error);
        })
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            console.log("incorret")
        }
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
              
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={hendleRegistation}>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="btn btn-primary">Registation</button>
                    </div>
                    </form>
                    <div className="ml-14 mb-10">
                        <p> Already Registation <Link to={"/Login"}> <span className=" text-orange-400">Login</span> </Link></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Register;