import React, { useState } from "react";

const Tab = () => {
  const [active, setActive] = useState(0);
  const tableList = ["Description", "Reviews", "Shipping", "About Seller"];
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted ">
        {tableList.map((item, index) => (
          <a
            onClick={() => setActive(index)}
            role="tab"
            key={index}
            className={`tab ${index === active ? "tab-active" : ""}`}
          >
            {item}
          </a>
        ))}

       
      </div>
      <div className=" justify-center flex w-full h-full bg-white px-6 py-2">
          {/* Description  */}
          <div className={`${active === 0 ? "bg-white" : "hidden"}`}>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.{" "}
            </h1>
          </div>

          {/* Review */}
          <div className={`${active === 1 ? "bg-white" : "hidden"}`}>
            <h1>Review section</h1>
          </div>

          {/* Shipping */}
          <div className={`${active === 2 ? "bg-white" : "hidden"}`}>
            <h1>shipping</h1>
          </div>

          {/* About Seller */}
          <div className={`${active === 3 ? "bg-white" : "hidden"}`}>
            <h1>About Seller</h1>
          </div>
        </div>
    </div>
  );
};

export default Tab;
