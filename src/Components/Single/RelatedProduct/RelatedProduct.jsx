import React, { useEffect, useState } from "react";
import useProduct from "../../../Hooks/useProduct";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const RelatedProduct = ({ item }) => {
  const product = useProduct();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let viweProductSlider;

  if (windowWidth >= 1440) {
    viweProductSlider = 6;
  } else if (windowWidth >= 1024) {
    viweProductSlider = 4;
  } else if (windowWidth >= 768) {
    viweProductSlider = 3;
  } else if (windowWidth >= 425) {
    viweProductSlider = 2;
  }

  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold py-4">Related Product</h1>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={viweProductSlider}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-slide-prev",
        }}
        pagination={true}
        scrollbar={{ draggable: true }}
      >
        {product.map((item, index) => (
          <SwiperSlide
            key={index}
            className="bg-white p-6 border-2 w-full h-full rounded-md cursor-pointer"
          >
            <img
              className="w-[6rem] h-[6rem] bg-gray-300"
              src={item.image[0]}
              alt=""
            />
            <h1>{item.name}</h1>
            <span>{item.regularPrice}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProduct;
