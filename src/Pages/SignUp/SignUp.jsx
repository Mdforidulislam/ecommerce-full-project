import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { data } from 'autoprefixer';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import loginAnimation from './login.json'


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
              regiNavi(`/dashboard/user/profile`)

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
    <div>
    <div className="min-h-screen bg-[#EEF2FB] flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto  lg:p-8 p-2  bg-[#EEF2FB] rounded-lg  flex  items-center overflow-hidden">
            <div className="w-2/5  p-8 items-center justify-center lg:block hidden">
                <Lottie animationData={loginAnimation}></Lottie>
            </div>
            <div className="lg:w-3/5 md:p-8 p-2">
                <h1 className="text-2xl font-bold mb-2">Brand</h1>
                <h2 className="text-xl mb-8">Create a new Account</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">User Name</label>
                        <input
                            type="text"
                            {...register('name', { required: true, minLength: 6 })}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            placeholder="User name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">User Email</label>
                        <input
                            type="email"
                            {...register('email', { required: true })}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            placeholder="User email"
                        />
                    </div>
              

                    <div>
                        <label className="block text-sm font-medium text-gray-700">New Password</label>
                        <input
                            {...register('password', { required: true, pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/ })}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            placeholder="User new password"
                            type="password"
                            name="password"
                        />
                        {errors.password?.type === 'required' && <span className="text-red-800">Password is required</span>}
                        {errors.password?.type === 'minlength' && <span className="text-red-800">Password must be 6 character</span>}
                        {errors.password?.type === 'maxlength' && <span className="text-red-800">Password must be less than 20 character</span>}
                        {errors.password?.type === 'pattern' && (
                            <span className="text-red-800">Password must have at least one upper case,at least one lower case, one number and one special character</span>
                        )}
                    </div>
                    <button type='submit' className="btn bg-[#0360D9] hover:bg-[#0360D9] text-white w-full">Sign up</button>

                    <div className="mt-4 gap-10">
                        <button type="submit" className="btn bg-[#0360D9] hover:bg-[#0360D9] text-white w-full">
                            <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                <path
                                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                                    fill="#EB4335"
                                />
                            </svg>
                            SignUp with Google
                        </button>
                    </div>
                </form>

                <div className="mt-6 flex flex-col space-y-2">
                    <a className="text-sm" href="#">
                        Already have an account? <Link to="/login"> Login here</Link>
                    </a>
                </div>
                <p className="mt-6 text-xs text-gray-600">
                    By logging into the Prominent application you are agreeing to the{' '}
                    <a className="text-blue-600" href="#">
                        Terms &amp; Conditions
                    </a>
                    .
                </p>
            </div>
        </div>
    </div>
</div>
  );
};

export default SignUp;
