import React from "react";
import Container from "../../Container/Container";
import NavItem from "./NavItem";

const Nanbar = () => {
    const navItem = [
        "all category",
        "hot offers",
        "projects",
        "menu item",
        "help",
      ];
  return (
    <div className="shadow-md  w-full bg-white">
      <Container>
        <div className="flex justify-between px-6 py-2 ">
        <div className="flex-wrap flex gap-6 list-none capitalize">
            <div>
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
              <li key={indx}>{item}</li>
            ))}
          </div> 
          <div className="">
            <div className="flex gap-6">
              <div>
                <select name="" id="">
                  <option value="">English</option>
                  <option value="">Bangla</option>
                  <option value="">handi</option>
                </select>
              </div>
              <div>
                <select name="" id="">
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
