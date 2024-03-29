import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { data } from 'autoprefixer';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [userData, setUserData] = useState({});
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser } = useContext(AuthContext);
  const regiNavi = useNavigate()
 

  const onSubmit = data => {
    setUserData(data);
  };

  useEffect(() => {
    if (userData.email && userData.password) {
      createUser(userData.email, userData.password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          axios.post('https://server-site-beta.vercel.app/register')
            .then(res => {
              console.log(res.data);
              Swal.fire({
                icon: 'success',
                title: 'Registration Successful!',
                text: 'You have successfully registered.',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
              });
              regiNavi(`/dashboard/profile`)

            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [userData]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
              {errors.name && <span className=' text-red-600'>Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
              {errors.email && <span className=' text-red-600'>Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} name='password' placeholder="password" className="input input-bordered" />
              {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
              {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters</p>}
              {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password less then 20 characters</p>}
              {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must have one lower case,one uppercase,one number and one spacial characters</p>}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary " type='submit' value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
