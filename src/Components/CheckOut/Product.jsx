import React from "react";
import useProduct from "../../Hooks/useProduct";

const Product = () => {
  const product = useProduct();

  return (
    <div>
      <div className=" space-y-4  w-full">
        {product.slice(0,5).map((item, index) => (
          <div key={index} className="md:flex block justify-between rounded-md space-y-4 bg-white border-2 w-full px-6 py-3 items-center h-full">
            <div className="flex h-full items-center gap-2">
              <div>
                <img className="lg:w-[12rem]  lg:h-[12rem] md:w-[8rem] md:h-[8rem] w-[5rem] h-[5rem] " src={item.image[0]} alt="" />
              </div>
              <div className="space-y-4">
                <h1>{item.name}</h1>
                <div className="flex flex-wrap">
                  <span>Size:Medium</span>,<span>Color: Blue</span>,
                  <span>Material: plastic</span>
                </div>
                <div className="flex gap-6">
                  <button className="p-2 font-bold text-red-500 bg-white border-2 rounded-md">
                    Remove
                  </button>
                  <button className="p-2 font-bold text-red-500 bg-white border-2 rounded-md">
                    save for later
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h1>${item.regularPrice}</h1>
              <select name="" id="">
                <option value="">Qantity: 1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
