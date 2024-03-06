import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

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
          axios.post('https://server-site-beta.vercel.app/register')
            .then(res => {
              console.log(res.data);
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
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              name='name'
              id="name"
              placeholder="Name"
              className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.name && <p className="text-red-600">Name is required</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              name='email'
              id="email"
              placeholder="Email"
              className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.email && <p className="text-red-600">Email is required</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
              name='password'
              id="password"
              placeholder="Password"
              className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be at least 6 characters</p>}
            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character</p>}
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
