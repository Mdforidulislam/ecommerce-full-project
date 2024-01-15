import React, { useState } from "react";
import Container from "../../Container/Container";
import NavItem from "./NavItem";
import { Link, useLocation } from "react-router-dom";

const Nanbar = () => {
  const [open,setOpen] = useState(false)
    const navItem = [
        "all category",
        "hot offers",
        "projects",
        "menu item",
        "help",
      ];

      const menuItem = [
        "Automobiles",
        "Clothes and wear",
        "Home interiors",
        "Computer and tech",
        "Tools, equipments",
        "Sports and outdoor",
        "Animal and pets",
        "Machinery tools",
        "More category",
      ];
  const userLoacation = useLocation()
  if (userLoacation.pathname !== '/' && userLoacation.pathname === 'product') {
    setOpen(true)
  }
  return (
    <div className="shadow-md  w-full bg-white">
      <Container>
        <div className="flex justify-between px-6 py-2 ">
        <div className="flex-wrap flex gap-6 list-none capitalize relative">
            <div onClick={()=>setOpen(!open)} className="cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                  fill="#1C1C1C"
                />
              </svg>
            </div>
            <div className={` mt-10 bg-gray-100 py-3 px-4 border-2 ${open?'duration-500 space-y-3 absolute w-3/4 h-auto lg:block hidden':'hidden'}`}>
              {
                menuItem.map((item,index)=>(
                       <li key={index} className=" hover:bg-white cursor-pointer z-40 p-1 rounded-2xl duration-300 text-xl px-6  w-3/4 h-full"><Link to='product'>{item}</Link></li>
                ))
              }
            </div>
            {navItem.map((item, indx) => (
              <li key={indx}><Link to='/product'>{item}</Link></li>
            ))}
          </div> 
          <div className="">
            <div className="flex gap-6">
              <div>
                <select defaultChecked name="" id="">
                  <option value="">English</option>
                  <option value="">Bangla</option>
                  <option value="">handi</option>
                </select>
              </div>
              <div>
                <select defaultChecked name="" id="">
                  <option value="">
                    Ship to<span></span>
                  </option>
                  <option value="">Bangla</option>
                  <option value="">handi</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Nanbar;
