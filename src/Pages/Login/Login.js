import React, { useContext } from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"

    const handleLogin = (data) => {
        console.log(data);
        setLoginError("");
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast("Successfully Login");
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    return (
        <div className="h-[400px] flex justify-center items-center">
            <div className="w-96 p-7">
                <h2 className="text-xl">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="email"
                            {...register("email", { required: "Email Address is required" })}
                            placeholder="Email" />
                        {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input className="input input-bordered w-full max-w-xs" type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be more than 6 character." }
                            })} placeholder="Password" />
                        {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password?</span></label>
                    </div>

                    <input className='btn btn-accence w-full' type="submit" value="Login" />
                    <div>
                        {loginError && <p className="text-red-600">{loginError}</p> }
                    </div>
                </form>
                <p>New to Doctor's Portal? <Link to="/signup" className="text-primary" >Create an Account</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;