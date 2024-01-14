import React, { useState } from 'react';

const ProductImg = ({item}) => {
    const [image,setImage]= useState(item.image[0])
    console.log(item);
    return (
        <div className='py-4 rounded-md '>
            <div className='border-2  px-4 py-4 '>
               <img className='w-full h-full' src={image} alt="" />
            </div>
            <div className='flex flex-wrap gap-5'>
                {item.image.map((item, index)=>(
                    <div key={item.id}>
                        <img className='w-[5rem] h-[5rem] border mt-5 p-2 rounded-md hover:border-black duration-700 cursor-pointer' onClick={()=>setImage(item)} src={item} alt="" />
                    </div>
                ))}
            </div>
            <div>
                <button className='bg-white-700 font-semiblod px-6 border-2 py-2 text-black w-full rounded-md mt-4 xl:hidden block'>Buy</button>
            </div>
        </div>
    );
};

export default ProductImg;