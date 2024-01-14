import React, { useEffect, useState } from 'react';

const useProduct = () => {
      const [product,setProduct] = useState([])
      useEffect(()=>{
        fetch('Productinfo.json')
        .then(res => res.json())
        .then(data => setProduct(data))
      },[])

      return product;
};

export default useProduct;