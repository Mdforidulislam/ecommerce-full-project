import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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
                   <Link key={index} to='/product'>
                    <div  className="bg-white border-2 p-4">
                        <img className="w-full h-full" src={item.image} alt="image" />
                        <h1 className="capitalize">{item.title}</h1>
                        <span className="text-red-500 font-bold">-{item.discount_percentage}%</span>
                    </div>
                   </Link>
                ))
            }
        </div>
    );
};

export default Product;