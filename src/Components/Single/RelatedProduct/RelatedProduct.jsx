import React from 'react';
import useProduct from '../../../Hooks/useProduct';

const RelatedProduct = ({item}) => {
    const product = useProduct()
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6'>
            {
                product.slice(0,6).map((item,index)=>(
                    <div key={index} className='bg-white p-6 border-2  rounded-md'>
                        <img className='w-[6rem] h-[6rem] bg-gray-300' src={item.image[0]} alt="" /> 
                        <h1>{item.name}</h1>
                         <span>{item.regularPrice}</span>
                    </div>  
                ))
            }
        </div>
    );
};

export default RelatedProduct;