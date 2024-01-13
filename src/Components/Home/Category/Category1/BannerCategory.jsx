import React from 'react';

const BannerCategory = () => {
    return (
        <div className='w-1/4 hidden lg:flex rounded-l-lg' style={{backgroundImage:'url(https://images.pexels.com/photos/4049793/pexels-photo-4049793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
            <div className='bg-gradient-to-r flex items-center  from-[#FFE0B0] to-[#FFE8BA] w-full h-full px-6 py-2 bg-opacity-60 opacity-70'>
                <div className='space-y-3 '>
                    <h1 className='text-2xl'>Home and outdoor</h1>
                    <button className='bg-white px-6 z-10 py-2 rounded-sm opacity-100'>Source Now</button>
                </div>
            </div>
        </div>
    );
};

export default BannerCategory;