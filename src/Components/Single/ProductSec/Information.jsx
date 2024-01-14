import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { MdOutlineMessage } from 'react-icons/md';
import { CiShoppingBasket } from 'react-icons/ci';
import RattingStar from '../../Produts/SearchNav/Ratings/RattingStar';

const Information = ({ item }) => {
  return (
    <div className="border box-border px-6 py-2">
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
      <div className='bg-[#FFF0DF] px-4 py-2 flex gap-3'>
          <div className='flex'>
            <span className='block'>$97.00</span>
            <span className='block'>50-100pcs</span>
          </div>
          <div>
            <span>$97.00</span>
            <span>50-100pcs</span>
          </div>
          <div>
            <span>$97.00</span>
            <span>50-100pcs</span>
          </div>
      </div>
    </div>
  );
};

export default Information;
