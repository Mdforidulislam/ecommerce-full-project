import React from 'react';
import logo from "../assets/logo-colored.png";
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex h-full relative'>

            <div>
                <div className='  w-64 lg:min-h-screen hidden md:block  bg-[#93C5FD] h-full overflow-y-auto text-[#FFF] transition-all duration-300'>
                    <Link to='/'>
                        <div className="flex items-center p-5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:hidden flex" >
                                <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#1C1C1C" />
                            </svg>

                            <img src={logo} alt="" />
                        </div>
                    </Link>


                    <div className="p-4 flex gap-2 justify-center my-auto flex-col xl:text-lg 2xl:text-xl">
                        <NavLink to='/dashboard/user/profile'
                            className='text-xl hover:bg-[#2c7feb] hover:text-white rounded-lg w-full  hover:scale-105 overflow-hidden  p-2 transition-all duration-200'>
                            Profile
                        </NavLink>
                    </div>


                </div></div>

            <div className='ml-auto h-full min-h-screen w-full bg-[#E1EEFF] text-[#021526] transition-all duration-300'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;