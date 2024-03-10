import React from 'react';
import logo from "../assets/logo-colored.png";
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>

           <div> 
            <div className='w-64 lg:min-h-screen hidden md:block  bg-[#93C5FD]'>
                <Link to='/'>
                    <div className="flex items-center h-full gap-5 pb-5">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:hidden flex" >
                            <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#1C1C1C" />
                        </svg>

                        <img src={logo} alt="" />
                    </div>
                </Link>
                <ul>
                    <li className='p-4 text-xl hover:bg-[#2c7feb] hover:text-white rounded-lg'>
                        <NavLink to='/dashboard/user/profile'>
                            Profile
                        </NavLink>
                    </li>
                </ul>

            </div></div>

            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;