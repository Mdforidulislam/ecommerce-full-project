import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Category = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="bg-white px-3 py-2 border-2">
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between w-full items-center h-full"
      >
        <div>
          <h1 className="text-xl font-semibold">Category</h1>
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
      <div className={`${show ? "" : "hidden"} list-none mt-3 duration-1000`}>
        <li>Mobile Accessory</li>
        <li>Electronics</li>
        <li>Smartphones</li>
        <li>Modern tech</li>
      </div>
    </div>
  );
};

export default Category;
