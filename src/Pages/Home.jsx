import Banner from "../Components/Home/Banner/Banner";
import Category from "../Components/Home/Category/Category1/Category";
import DealsOffers from "../Components/Home/DealsOffer/DealsOffers";
import ExtraService from "../Components/Home/Extra/ExtraService";
import Inquiry from "../Components/Home/Inquiry/Inquiry";
import PopularCategory from "../Components/Home/PopularCategory";
import RecommendedItem from "../Components/Home/Recommended/RecommendedItem";

const Home = () => {
    return (
        <div>
           <Banner/>
           <PopularCategory/>
           <DealsOffers/>
           <Category/>
           <Category/>
           <Inquiry/>
           <RecommendedItem/>
           <ExtraService/>
        </div>
    );
};

export default Home;