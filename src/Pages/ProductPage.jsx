import React from 'react';
import Container from '../Container/Container';
import BreadCum from '../Components/Produts/BreadCum';
import SearchNav from '../Components/Produts/SearchNav/SearchNav';
import Verified from '../Components/Produts/Verifid/Verified';
const ProductPage = () => {
    return (
        <div>
            <BreadCum/>
            <div className='flex gap-4 justify-between w-full'>
                 <div className='lg:w-1/4'>
                 <SearchNav/>
                 </div>
                <div className='lg:w-3/4 w-full'>
                <Verified/>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;