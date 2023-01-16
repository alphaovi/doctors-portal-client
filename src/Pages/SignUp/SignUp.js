import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (data) => {
        console.log(data)
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast("User created successfully")
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUserToDatabase(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message);
            });
    }

    const saveUserToDatabase = (name, email) => {
        const user = { name, email };
        fetch("http://localhost:5000/users", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate("/")
            })
    }

    return (
        <div className="h-[400px] flex justify-center items-center">
            <div className="w-96 p-7">
                <h2 className="text-xl">Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <span className="text-red-500">Name is Required</span>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <span className="text-red-500">Email is Required</span>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be more than 6 character" }
                        })} className="input input-bordered w-full max-w-xs" placeholder="Password" />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                    </div>

                    <input className='btn btn-accence w-full mt-5' type="submit" value="Sign Up" />
                    {signUpError && <p className="text-red-600">{signUpError}</p>}
                </form>
                <p>Already Have An Account?<Link to="/login" className="text-primary" >Please Login</Link></p>
                <div className="divider m-6">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;