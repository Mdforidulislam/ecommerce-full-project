import React from 'react';
import Purchase from './Purchase';
import Information from './Information';
import ProductImg from './Productimg';

const ProductSec = ({item}) => {
    return (
        <div className='bg-white border-2 rounded-md  md:flex md:flex-wrap gap-4 space-y-3 block justify-between w-full h-full px-6  py-3 box-border'>
             <ProductImg item={item}/>
             <Information item={item}/>
             <Purchase item={item}/>
        </div>
    );
};

export default ProductSec;