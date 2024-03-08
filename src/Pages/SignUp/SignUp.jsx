import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { data } from 'autoprefixer';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [userData, setUserData] = useState({});
const { register, handleSubmit, formState: { errors } } = useForm();
const { createUser } = useContext(AuthContext);

const onSubmit = data => {
  setUserData(data);
};


useEffect(() => {
  if (userData.email && userData.password) {
    createUser(userData.email, userData.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // Update any other state or perform actions here
      })
      .catch(error => {
        console.log(error);
      });
  }
}, [userData]);

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className=" shrink-0 w-full  shadow-2xl bg-base-100 px-10 py-4">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered w-full"/>
          {errors.name && <span className=' text-red-600'>Name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered w-full" />
          {errors.email && <span className=' text-red-600'>Email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", { required: true,minLength:6,maxLength:20,pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} name='password' placeholder="password" className="input input-bordered w-full"  />
          {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
          {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters</p>}
          {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password less then 20 characters</p>}
          {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must have one lower case,one uppercase,one number and one spacial characters</p>}
        </div>
        <div className="form-control mt-6">
          <input className="btn bg-[#2563EB] text-white border-none  " type='submit' value="Sign Up" />
        </div>
      </form>
      <Link to='/login'> <p className='cursor-pointer text-[#2563EB]'>All ready Account</p></Link>
    </div>
  </div>
</div>
    );
};

export default SignUp;