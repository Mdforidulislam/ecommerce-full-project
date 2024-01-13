import { useEffect, useState } from "react";


const Product = () => {
    const [product,setProduct] = useState([])
    useEffect(()=>{
        fetch('/OfferProduct.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mr-1">
            {
                product.slice(0,5).map((item,index)=>(
                    <div key={index} className="bg-white border-2 p-4">
                        <img src={item.image} alt="image" />
                        <h1 className="capitalize">{item.title}</h1>
                        <span className="text-red-500 font-bold">-{item.discount_percentage}%</span>
                    </div>
                ))
            }
        </div>
    );
};

export default Product;