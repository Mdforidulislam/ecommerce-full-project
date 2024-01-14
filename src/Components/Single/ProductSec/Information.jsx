import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { MdOutlineMessage } from 'react-icons/md';
import { CiShoppingBasket } from 'react-icons/ci';
import RattingStar from '../../Produts/SearchNav/Ratings/RattingStar';

const Information = ({ item }) => {
  return (
    <div className="border-2 box-border px-6 py-2 space-y-3 flex-1 rounded-md">
      <span className="flex gap-1 text-[#5fd16e] items-center">
        <FaRegCheckCircle />
        <span>In Stock</span>
      </span>
      <h1>{item.name}</h1>
      <div className="flex items-center gap-1">
        <RattingStar />
        <span>{item.rating}</span>
        <MdOutlineMessage />
        <span>{item.reviewTotal} Reviews</span>
        <CiShoppingBasket />
        <span>{item.sold} Sold</span>
      </div>
      <div className='bg-[#FFF0DF] px-4 py-2 flex gap-3 '>
          <div className='border-r pr-5'>
            <h1 className='font-bold text-red-400'>$97.00</h1>
            <h1>50-100pcs</h1>
          </div>
          <div className='border-r pr-5'>
            <h1 className='font-bold text-red-400'>$97.00</h1>
            <h1>50-100pcs</h1>
          </div>
          <div >
            <h1 className='font-bold text-red-400'>$97.00</h1>
            <h1>50-100pcs</h1>
          </div>
      </div>
       <div>
        <p>Price: Negotiable</p>
       </div>
       <hr/>
       <div>
         <h1> Type: <span>{item.productType}</span></h1>
         <h1>Material: <span>{item.material}</span></h1>
          <h1> Design: <span>{item.design}</span></h1>
       </div>
       <hr/>
       <div>
          <h1>Customization: <span>Customized logo and design custom packages</span></h1>
          <h1><span>Protection: Refund Policy</span></h1>
          <h1>Warranty: 2 years full warranty</h1>
       </div>
    </div>
  );
};

export default Information;
