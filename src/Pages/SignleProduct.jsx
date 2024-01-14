import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import BreadCum from '../Components/Produts/BreadCum';
import ProductSec from '../Components/Single/ProductSec/ProductSec';
import RelatedProduct from '../Components/Single/RelatedProduct/RelatedProduct';
import ProductInfo from '../Components/Single/ProductInfo/ProductInfo';

const SignleProduct = () => {
    const [product,setProduct] = useState([])
    useEffect(()=>{
        fetch('Productinfo.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div>
           <Container>
                <div className='lg:px-6'>
                    <BreadCum />
                    <div>
                        {
                            product.slice(0,1).map((item,index)=>(
                                <div key={item.id} className='space-y-2'>
                                    <div className=' '>
                                        <ProductSec item={item} />
                                    </div>
                                    <div>
                                         <ProductInfo/>
                                    </div>
                                    <div>
                                        <RelatedProduct item={item}/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
           </Container>
        </div>
    );          
};

export default SignleProduct;