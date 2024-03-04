import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCategory = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("OfferProduct.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
      {data.map((item, index) => (
        <Link to='/product' key={item.id}>
        <div  className="flex gap-5 bg-white p-6 border">
          <div className="w-full">
            <h1 className="capitalize">{item.title}</h1>
            <span>From</span>
            <br/>
            <span>${item.discount_percentage}</span>
          </div>
          <div>
            <img className='w-[10rem] h-[7rem]' src={item.image} alt="" />
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCategory;
