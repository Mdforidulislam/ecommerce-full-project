import { useEffect, useState } from "react";
import Container from "../../../Container/Container";

const ExtraService = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("ExtraService.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <Container>
        <div>
          <h1 className="text-2xl py-6">Our extra services</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((item, index) => (
              <div key={index} className=" bg-white rounded-b-lg border-2 ">
                <div className="">
                  <img className="opacity-70" src={item.image} alt="" />
                  <div className="px-6 py-4 relative">
                    <div className=" flex justify-end items-center h-full w-full  box-border ">
                      <span className=" -mt-12 absolute flex items-center justify-center rounded-full  bg-white w-[80px] h-[80px]">
                        <img
                          className="w-[30px] h-[30px]"
                          src={item.icon}
                          alt=""
                        />
                      </span>
                    </div>
                    <h1 className="mt-8">{item.title}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ExtraService;
