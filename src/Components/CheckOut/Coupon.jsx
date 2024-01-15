import React from 'react';

const Coupon = () => {
    return (
        <div>
            <form action="" className='p-4 border-2 bg-white rounded-md space-y-4'>
                <h1 className='text-xl'>Have a coupon?</h1>
                <div className='flex border-2 rounded-md w-full'>
                    <input type="text" placeholder='Add coupon ' className='px-3 w-full py-2 focus:outline-none'  />
                    <button className='px-2 bg-blue-500 text-white py-1 rounded-r-md'>Apply</button>
                </div>
            </form>
        </div>
    );
};

export default Coupon;