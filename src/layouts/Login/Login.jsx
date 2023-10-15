/* eslint-disable react/jsx-no-undef */

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AuthContacex } from "../../Hook/AuthProvider";
import Swal from "sweetalert2";



const Login = () => {

    const{singInUser, signInWithGoogle}=useContext(AuthContacex)
    const navigate =useNavigate();


    const hendleLogIn  = e =>{
        e.preventDefault();
        const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(email,password)

        singInUser(email, password)
        .then(Result=>{
            console.log(Result.user)
            e.target.reset();
            navigate('/')
            Swal.fire(
                'Login Success',
                'You clicked the button!',
                'success'
              )
        })
        .catch(error=>{
            console.error(error);
        })
    }
    const googleHangler=()=>{
        signInWithGoogle()

        .then(Result=>{
            console.log(Result.user)
            navigate('/')
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
                    <button onClick={googleHangler} className=" flex  items-center gap-2 text-orange-600 p-2 m-auto">
                        <h1 className=" text-xs">Login With :</h1>
                        <p><FcGoogle></FcGoogle></p>
                    </button>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-full ">Login</button>
                    </div>
                    </form>
                    <div className="ml-20 mb-10">
                        <p> New Here <Link to={"/Register"}> <span className=" text-orange-400 w-10 md:w-fit text-base md:">Register</span> </Link></p>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;