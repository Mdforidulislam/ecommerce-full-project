import { useEffect, useState } from "react";
import LayoutFour from "./LayoutFour";
import LayoutOne from "./LayoutOne";
import { Link } from "react-router-dom";



const ProductCategory = ({layout}) => {
    const [product,setProduct] = useState([])
    useEffect(()=>{
        fetch('Productinfo.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    console.log(layout);
    return (
        <div>
            <div className={`${ layout > 1 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4':'grid grid-cols-1 gap-6'}`}>
                {
                    product.map((item,index)=>(
                        layout > 1 ? <Link key={item.id} to='singleProduct'><LayoutFour  item={item} /></Link> : <Link key={item.id} to='singleProduct'><LayoutOne key={item.id} item={item}/></Link>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductCategory;