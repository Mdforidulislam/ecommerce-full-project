
import { useEffect, useState } from "react";
import Container from "../../Container/Container";

const PopularCategory = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('CategoryPopular.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div>
            <Container>
                <div>
                   <h1 className="text-3xl capitalize">popular category</h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6  mt-10">
                        {
                            data.map((item,index)=>(
                                <div key={item.id} className="bg-white border-2 rounded-md  p-6 w-full h-full ">
                                    <img className="w-[30px] h-[30px]" src={item.image} alt="" />
                                    <h1>{item.title}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PopularCategory;