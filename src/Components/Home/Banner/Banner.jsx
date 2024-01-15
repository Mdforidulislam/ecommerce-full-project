import Container from '../../../Container/Container';



const Banner = () => {
    const navItem = [
        "Automobiles",
        "Clothes and wear",
        "Home interiors",
        "Computer and tech",
        "Tools, equipments",
        "Sports and outdoor",
        "Animal and pets",
        "Machinery tools",
        "More category",
      ];
    return (
        <div >
           <Container>
             <div className='bg-white rounded-md md:py-4 h-full flex w-full py-2 px-3 border-2 md:px-6'>
             <div className='px-6 list-none flex-1 hidden lg:block space-y-6  border w-3/4 mr-3'>
                {
                    navItem.map((item,index) =>(
                        <li className='hover:bg-gray-100 cursor-pointer px-6 py-2 rounded-md capitalize text-md w-full' key={index}>{item}</li>
                    ))
                }
              </div>
              <div className='lg:w-3/4 w-full' style={{backgroundImage:'url(https://plus.unsplash.com/premium_photo-1661774910035-05257f7d73a6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                 <div className='bg-black w-full h-full bg-opacity-50'>
                 <div className='md:px-12 px-6 py-10 md:py-24 md:space-y-4 space-y-2'>
                    <h1 className='text-white md:text-3xl text-xl font-bold'>Latest Trending</h1>
                    <h1 className='text-white text-2xl md:text-5xl font-bold'>Electronic Items</h1>
                    <button className='bg-blue-600 md:px-6 px-3 py-2 rounded-sm text-white'>Learn more</button>
                 </div>
                 </div>
              </div>
             </div>

           </Container>
        </div>
    );
};

export default Banner;