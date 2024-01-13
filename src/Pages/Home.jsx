import Banner from "../Components/Home/Banner/Banner";
import Category from "../Components/Home/Category/Category1/Category";
import DealsOffers from "../Components/Home/DealsOffer/DealsOffers";


const Home = () => {
    return (
        <div>
           <Banner/>
           <DealsOffers/>
           <Category/>
        </div>
    );
};

export default Home;