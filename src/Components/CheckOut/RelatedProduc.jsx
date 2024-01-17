import React, { useEffect, useState } from 'react';
import useProduct from '../../Hooks/useProduct';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const RelatedProduct = () => {
  const products = useProduct();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
      <h1 className='text-xl mb-2 font-semibold'>Related Products</h1>
      <div className='slider-container'>
        <div className='slider w-full h-full'>
          <Swiper
            spaceBetween={50}
            slidesPerView={viweProductSlider}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            slide
            navigation={{
              nextEl : '.swiper-button-next',
              prevEl: '.swiper-slide-prev'
            }}
            pagination={{  type:'bullets' }}
            scrollbar={{ draggable: true }}
          >
            {products.map((item, index) => (
              <SwiperSlide key={index} className='slider-item cursor-pointer'>
                <div className='bg-white border-2 rounded-md p-4'>
                  <img className='w-[100px] h-[100px]' src={item.image[0]} alt={item.name} />
                  <h1>{item.name}</h1>
                  <p>${item.regularPrice}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className='flex gap-4 mt-4'>
            <button className='swiper-button-prev'>Previous</button>
            <button className='swiper-button-next'>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
