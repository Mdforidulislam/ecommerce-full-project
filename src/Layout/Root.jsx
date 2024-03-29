import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Components/Home/Header';
import Nanbar from '../Components/Home/Nanbar';
import Footer from '../Components/Home/Footer';
import Subscribe from '../Components/Home/Subscribe';

const Root = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div className='bg-gray-100 w-full h-full '>
            { <Header/>}
            <div className='hidden md:flex'>
               { noHeaderFooter || <Nanbar />}
            </div>
            <Outlet/>
            {noHeaderFooter || <Subscribe/>} 
           { <Footer/>}
        </div>
    );
};

export default Root;