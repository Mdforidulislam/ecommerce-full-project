import Container from "../../../Container/Container";
import Brands from "./Brands/Brands";
import Category from "./Category/Category";
import Chondition from "./Condition/Condition";
import Features from "./Features/Features";
import PriceRang from "./Price Rang/PriceRang";
import Rating from "./Ratings/Rating";

const SearchNav = () => {
    return (
        <div className="hidden lg:block py-1">
            {/* search funtionality */}
            <Container>
                <div className="px-6 space-y-4">
                   <Category/>  
                   <Brands/> 
                   <Features/> 
                   <PriceRang/>
                   <Chondition/> 
                   <Rating/>         
                </div>
            </Container>
        </div>
    );
};

export default SearchNav;