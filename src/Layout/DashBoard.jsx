import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='flex'>
            <div className=' w-64 h-screen bg-blue-300'>
                <ul className=' menu'>
                    <li><NavLink to="/dashBoard/userHome">User Home</NavLink></li>
                    <li><NavLink to="/dashBoard/cart">My Cart</NavLink></li>
                    <li><NavLink to="/dashBoard/myBookings">My Bookings</NavLink></li>

                    <div className=' divider'></div>

                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/order">Order</NavLink></li>
                </ul>
            </div>
            <div className=' flex-1'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;