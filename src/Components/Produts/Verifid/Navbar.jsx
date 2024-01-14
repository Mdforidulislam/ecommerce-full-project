import { LuLayoutGrid } from "react-icons/lu";
import { MdOutlineMenu } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { FcGenericSortingDesc } from "react-icons/fc";
import Container from "../../../Container/Container";
import { useState } from "react";

const Navbar = ({setLayout}) => {
  const [clickLayout, chickLayoutSet] = useState(1)
  setLayout(clickLayout)
  return (
    <div className="bg-white py-2 md:px-4 border-2">
      <Container>
        <div className="flex justify-between w-full items-center h-full ">
          <div className="hidden lg:flex w-3/5">
            <h1>12323 in mobile accessory</h1>
          </div>
          <div className="flex gap-4 lg:w-3/10 items-center h-full justify-between lg:justify-normal w-full">
            <div className="hidden lg:flex gap-3 w-full h-full items-center justify-end">
              <input type="checkbox" name="" id="" />
              <p>Verified Only</p>
            </div>

            <div className="hidden lg:block border  focus:outline-none h-full w-2/10 py-2 bg-white px-4 rounded-md">
              <select name="" id="">
                <option value="">Featured</option>
                <option value="">Featured</option>
                <option value="">Featured</option>
                <option value="">Featured</option>
              </select>
            </div>
            <div className="flex gap-3 lg:hidden h-full items-center border  px-3 py-2 rounded">
              <select className="w-full" name="" id="">
                <option value="">Newest</option>
                <option value="">Most popular</option>
                <option value="">sold</option>
              </select>
              <span>
                <FcGenericSortingDesc />
              </span>
            </div>
            <div className="flex gap-3 lg:hidden h-full items-center border px-2 py-2 w rounded">
              <span>Filter(3)</span>
              <span>
                <FaFilter />
              </span>
            </div>
            <div className="flex gap-1 border justify-center h-full py-2 px-5 shadow-inner rounded-md">
              <span>
                <LuLayoutGrid onClick={()=>chickLayoutSet(4)} className="text-xl bg-gray-200" />
              </span>
              <span>
                <MdOutlineMenu onClick={()=>chickLayoutSet(1)} className="text-xl bg-gray-300" />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
