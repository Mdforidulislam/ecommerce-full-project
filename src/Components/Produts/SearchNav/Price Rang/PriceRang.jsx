import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const PriceRang = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="bg-white px-3 py-2 border-2">
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between w-full items-center h-full"
      >
        <div>
          <h1 className="text-xl font-semibold">Price range</h1>
        </div>
        <div>
          {show ? (
            <span className="text-2xl font-bold">
              <MdKeyboardArrowDown />
            </span>
          ) : (
            <span className="text-2xl font-bold">
              <MdOutlineKeyboardArrowUp />
            </span>
          )}
        </div>
      </div>
      <div className={`${show ? "" : "hidden"} list-none mt-3 duration-1000 space-y-2`}>
          <input type="range" name="" id="" className="w-full" />
          <div className="flex w-full gap-4">
             <input type="text" defaultValue={'0'} className="px-4 w-2/4 py-2 bg-transparent border focus:outline-none" />
             <input type="text" defaultValue={'9999'} className="px-4 w-2/4 py-2 bg-transparent border focus:outline-none" />
          </div>
          <button className="w-full px-10 py-2 bg-white">Apply</button>
      </div>
    </div>
  );
};

export default PriceRang;