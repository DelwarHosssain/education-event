/* eslint-disable react/jsx-no-undef */

import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContacex } from "../../Hook/AuthProvider";



const Login = () => {

    const{singInUser}=useContext(AuthContacex)


    const hendleLogIn  = e =>{
        e.preventDefault();
        const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(email,password)

        singInUser(email, password)
        .then(Result=>{
            console.log(Result.user)
        })
        .catch(error=>{
            console.error(error);
        })
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
              
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={hendleLogIn}>
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
                        <input type="password" placeholder="password" name="password"  className="input input-bordered" required />
                        <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-full ">Login</button>
                    </div>
                    </form>
                    <div className="ml-20 mb-10">
                        <p> New Here <Link to={"/Register"}> <span className=" text-orange-400">Register</span> </Link></p>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;