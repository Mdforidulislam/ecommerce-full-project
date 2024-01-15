import React, { useEffect, useState } from 'react';
import useProduct from '../../Hooks/useProduct';
import './RelatedProduct.css';

const RelatedProduct = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const products = useProduct();
  const productsToShow = products.slice(currentSlide, currentSlide + 6);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % (products.length - 5));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + (products.length - 5)) % (products.length - 5));
  };
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => { 
    // Attach event listener to window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(windowWidth);

  return (
    <div>
      <h1 className='text-xl mb-2 font-semibold'>Related Products</h1>
      <div className='slider-container'>
        <div className='slider w-full h-full' style={{ transform: `translateX(-${currentSlide * (100 / 6)}%)` }}>
          {productsToShow.map((item, index) => (
            <div key={index} className='slider-item'>
              <div className='bg-white border-2 rounded-md p-4 w-[300px]'>
                <img className='w-[7rem]' src={item.image[0]} alt={item.name} />
                <h1>{item.name}</h1>
                <p>${item.regularPrice}</p>
              </div>
            </div>
          ))}
        </div>
        <button className='slider-button prev' onClick={prevSlide}>
          &#10094;
        </button>
        <button className='slider-button next' onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default RelatedProduct;
