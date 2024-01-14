import React, { useState } from 'react';

const ProductImg = ({item}) => {
    const [image,setImage]= useState(item.image[0])
    console.log(item);
    return (
        <div>
            <div className='border-2  px-4 py-4 '>
               <img className='w-full h-full' src={image} alt="" />
            </div>
            <div className='flex flex-wrap gap-5'>
                {item.image.map((item, index)=>(
                    <div key={item.id}>
                        <img className='w-[5rem] h-[rem] border mt-5 p-2 rounded-md hover:border-black duration-700 cursor-pointer' onClick={()=>setImage(item)} src={item} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImg;