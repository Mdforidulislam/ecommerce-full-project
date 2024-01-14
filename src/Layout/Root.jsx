import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Home/Header';
import Nanbar from '../Components/Home/Nanbar';
import Footer from '../Components/Home/Footer';
import Subscribe from '../Components/Home/Subscribe';

const Root = () => {
    return (
        <div className='bg-gray-100 w-full h-full '>
            <Header/>
            <div className='hidden md:flex'>
               <Nanbar />
            </div>
            <Outlet/>
            <Subscribe/> 
            <Footer/>
        </div>
    );
};

export default Root;