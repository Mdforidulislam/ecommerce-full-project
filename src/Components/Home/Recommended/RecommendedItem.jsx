import { useEffect, useState } from "react";
import Container from "../../../Container/Container";
import { Link } from "react-router-dom";

const RecommendedItem = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('OfferProduct.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
       <Container>
         <div className="">
            <h1 className="text-2xl  py-4">Recommended items</h1>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border  gap-6 rounded-sm">
            {
                data.map((item,index)=>(
                  <Link key={index} to='/product'>
                    <div  className="bg-white border px-5 py-3 rounded-md">
                        <img src={item.image} alt="" />
                        <h3>${item.discount_percentage}</h3>
                        <span>{item.title}</span>
                    </div>
                  </Link>
                ))
            }
           </div>
        </div>
       </Container>
    );
};

export default RecommendedItem;