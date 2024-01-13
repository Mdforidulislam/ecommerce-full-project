import React from "react";

const NavItem = () => {
  const navItem = [
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
  return (
    <div className="w-full">
      <div className="flex gap-3  items-center bg-gray-200 w-full h-full p-3 my-3 rounded">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7549 14.255H14.9649L14.6849 13.985C15.6649 12.845 16.2549 11.365 16.2549 9.755C16.2549 6.165 13.3449 3.255 9.75488 3.255C6.16488 3.255 3.25488 6.165 3.25488 9.755C3.25488 13.345 6.16488 16.255 9.75488 16.255C11.3649 16.255 12.8449 15.665 13.9849 14.685L14.2549 14.965V15.755L19.2549 20.745L20.7449 19.255L15.7549 14.255ZM9.75488 14.255C7.26488 14.255 5.25488 12.245 5.25488 9.755C5.25488 7.26501 7.26488 5.255 9.75488 5.255C12.2449 5.255 14.2549 7.26501 14.2549 9.755C14.2549 12.245 12.2449 14.255 9.75488 14.255Z"
            fill="#1C1C1C"
          />
        </svg>

        <input className="bg-transparent focus:outline-none" type="search" name="" id="" placeholder="Search" />
      </div>
      <div className=" flex gap-6 list-none capitalize overflow-x-scroll w-full">
        <div className="hidden md:flex">
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
        {navItem.map((item, indx) => (
          <span key={indx}><li className="bg-gray-200 w-full h-full px-3 py-1 rounded-sm shadow" key={indx}>{item}</li></span>
        ))}
      </div>
    </div>
  );
};

export default NavItem;
